'use client';

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">About Me</h1>
      <div className="card mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background bg-card">
              <Image
                src="/bebe.jpg"
                alt="About Me"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg mb-4">
              Hi, I&apos;m Sean Michael Andrew B. Mendoza, a passionate Python Developer with a strong background in modern technologies. I specialize in YOLOv8 object detection, front-end development using HTML, CSS, and JavaScript, and UI/UX design with Figma and Tailwind CSS. I have a versatile skill set that bridges design and development, allowing me to create dynamic, responsive, and visually appealing web applications.
            </p>
            <p className="text-lg">
              My job is to build your website to be functional and user-friendly yet
              attractive. Moreover, I add a personal touch to your product and make sure
              that the website catches attention and is easy to use. My goal is to convey
              your message and identity in the most creative way.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 