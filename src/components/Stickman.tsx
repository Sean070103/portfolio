'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

const BEHAVIORS = ['walk', 'sit', 'wave', 'jump', 'follow', 'dance', 'goto-word'] as const;
type Behavior = typeof BEHAVIORS[number];

const MESSAGES = [
  "Nice day for a walk! 🌞",
  "Just enjoying the breeze... 🍃",
  "Taking my time... 🚶",
  "What a lovely day! 🌸",
  "The weather is perfect! ☀️",
  "Looking at the clouds... ⛅",
  "*whistles happily* 🎵",
  "Reading...",
  "I found a word!",
  "Words are fun!",
];

function getRandomTargetPosition(): { x: number; y: number; text: string } | null {
  const elements = Array.from(document.querySelectorAll('.stickman-target')) as HTMLElement[];
  if (elements.length === 0) return null;
  const el = elements[Math.floor(Math.random() * elements.length)];
  const rect = el.getBoundingClientRect();
  // Place stickman at the bottom center of the element
  return {
    x: rect.left + rect.width / 2 + window.scrollX - 20, // -20 to center stickman
    y: rect.top + rect.height + window.scrollY + 5, // just below the word
    text: el.innerText || el.textContent || ''
  };
}

export default function Stickman() {
  // Removed unused 'theme' variable
  const [stickmanPos, setStickmanPos] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [behavior, setBehavior] = useState<Behavior>('walk');
  const [isThrown, setIsThrown] = useState(false);
  const [message, setMessage] = useState('');
  const [isFollowingMouse, setIsFollowingMouse] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetWord, setTargetWord] = useState<{ x: number; y: number; text: string } | null>(null);
  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const behaviorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const messageTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wordTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Show random message
  const showMessage = (customMessage?: string) => {
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
    }
    setMessage(customMessage || MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
    messageTimeoutRef.current = setTimeout(() => setMessage(''), 3000);
  };

  // Walk to a random word
  const walkToRandomWord = useCallback(() => {
    const target = getRandomTargetPosition();
    if (target) {
      setTargetWord(target);
      setBehavior('goto-word');
      showMessage(`Going to: "${target.text.slice(0, 20)}"`);
    }
  }, []);

  // Autonomous behavior selection
  const selectNewBehavior = useCallback(() => {
    // 50% chance to walk to a word, otherwise random behavior
    if (Math.random() < 0.5) {
      walkToRandomWord();
      // Will pick a new word after reaching it
      return;
    }
    const randomBehavior = BEHAVIORS[Math.floor(Math.random() * (BEHAVIORS.length - 1))]; // Exclude 'goto-word' from random
    setBehavior(randomBehavior);
    setTargetWord(null);

    if (randomBehavior === 'walk') {
      // Random walk target - park-walking pace
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 100);
      const dx = newX - stickmanPos.x;
      const dy = newY - stickmanPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setVelocity({
        x: (dx / distance) * 0.8,
        y: (dy / distance) * 0.8
      });
      showMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
    } else if (randomBehavior === 'follow') {
      setIsFollowingMouse(true);
      showMessage("I'll follow you!");
    } else {
      setIsFollowingMouse(false);
      if (randomBehavior === 'dance') {
        showMessage("Let's dance!");
      } else if (randomBehavior === 'wave') {
        showMessage("Hello there!");
      } else if (randomBehavior === 'sit') {
        showMessage("Taking a break!");
      }
    }
    const timeout = Math.random() * 8000 + 5000;
    behaviorTimeoutRef.current = setTimeout(selectNewBehavior, timeout);
  }, [stickmanPos.x, stickmanPos.y, walkToRandomWord]);

  // When reaching a word, pause, then pick a new word or behavior
  const onReachWord = useCallback(() => {
    setVelocity({ x: 0, y: 0 });
    setBehavior('sit');
    showMessage(`Reading: "${targetWord?.text.slice(0, 20)}"`);
    wordTimeoutRef.current = setTimeout(() => {
      setTargetWord(null);
      selectNewBehavior();
    }, 3500);
  }, [targetWord, selectNewBehavior]);

  // Initialize autonomous behavior
  useEffect(() => {
    if (!isDragging && !isThrown) {
      selectNewBehavior();
    }
    return () => {
      if (behaviorTimeoutRef.current) clearTimeout(behaviorTimeoutRef.current);
      if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
      if (wordTimeoutRef.current) clearTimeout(wordTimeoutRef.current);
    };
  }, [isDragging, isThrown, selectNewBehavior]);

  // Mouse position tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Physics and animation loop
  useEffect(() => {
    const animate = () => {
      if (isThrown) {
        setVelocity(prev => ({
          x: prev.x * 0.98,
          y: prev.y * 0.98 + 0.2
        }));
      } else if (isFollowingMouse && !isDragging) {
        const dx = mousePos.x - stickmanPos.x;
        const dy = mousePos.y - stickmanPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 5) {
          setVelocity({ x: dx * 0.02, y: dy * 0.02 });
        } else {
          setVelocity({ x: 0, y: 0 });
        }
      } else if (behavior === 'goto-word' && targetWord && !isDragging) {
        const dx = targetWord.x - stickmanPos.x;
        const dy = targetWord.y - stickmanPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance > 8) {
          setVelocity({ x: (dx / distance) * 0.8, y: (dy / distance) * 0.8 });
        } else {
          onReachWord();
        }
      }

      setStickmanPos(prev => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        if (newX < 0 || newX > window.innerWidth - 40) {
          setVelocity(prev => ({ ...prev, x: -prev.x * 0.8 }));
          newX = Math.max(0, Math.min(newX, window.innerWidth - 40));
          showMessage("Ouch!");
        }
        if (newY > window.innerHeight - 50) {
          setVelocity(prev => ({ ...prev, y: -prev.y * 0.5 }));
          newY = window.innerHeight - 50;
          if (Math.abs(velocity.x) < 0.1 && Math.abs(velocity.y) < 0.1) {
            setIsThrown(false);
            setVelocity({ x: 0, y: 0 });
          } else {
            showMessage("Boing!");
          }
        }
        return { x: newX, y: newY };
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [velocity, isThrown, isFollowingMouse, mousePos.x, mousePos.y, behavior, targetWord, onReachWord, stickmanPos.x, stickmanPos.y, isDragging]);

  // Dragging handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsThrown(false);
    setIsFollowingMouse(false);
    dragStartPos.current = { x: e.clientX - stickmanPos.x, y: e.clientY - stickmanPos.y };
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    showMessage("Wheee! I'm flying!");
    if (behaviorTimeoutRef.current) clearTimeout(behaviorTimeoutRef.current);
    if (wordTimeoutRef.current) clearTimeout(wordTimeoutRef.current);
  };



  const handleMouseUp = (e: React.MouseEvent) => {
    if (isDragging) {
      setIsDragging(false);
      const throwVelocityX = (e.clientX - lastMousePos.current.x) * 0.3;
      const throwVelocityY = (e.clientY - lastMousePos.current.y) * 0.3;
      if (Math.abs(throwVelocityX) > 1 || Math.abs(throwVelocityY) > 1) {
        setIsThrown(true);
        setVelocity({ x: throwVelocityX, y: throwVelocityY });
        showMessage("Weeeeeee!");
      }
    }
  };

  const handleClick = () => {
    if (!isDragging && !isThrown) {
      showMessage("Hi there! ");
      setBehavior('wave');
      setTimeout(() => selectNewBehavior(), 2000);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) setIsDragging(false);
    };
    const handleMouseMove = () => {
      if (isDragging) {
        // Optionally update position here if needed for global drag
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDragging]);

  return (
    <>
      <div
        className={`stickman ${behavior} ${isDragging ? 'dragging' : ''} ${isThrown ? 'thrown' : ''}`}
        style={{
          transform: `translate(${stickmanPos.x}px, ${stickmanPos.y}px)`,
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
      >
        <div className="legs"></div>
        <div className="arms"></div>
        {message && (
          <div className="message">
            {message}
          </div>
        )}
      </div>
    </>
  );
} 