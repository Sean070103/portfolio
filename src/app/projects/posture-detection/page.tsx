'use client';

import Image from "next/image";

export default function PostureDetectionProject() {
  return (
    <main className="container mx-auto px-4 py-20">
      <article className="prose prose-invert max-w-3xl mx-auto">
        <h1>Posture Detection</h1>
        <p>
          In today&apos;s world, improper body alignment is quite widespread and can result in poor posture in many individuals. These are major causes for musculoskeletal disorders and a poor quality of life. These issues can cause different discomforts, pain, and fatigue that have impacts on daily activity and overall well-being.
        </p>
        <figure className="my-8">
          <Image src="/projects/test.jpg" alt="Test Posture" width={640} height={480} className="rounded-lg border border-gray-700 mx-auto" />
          <figcaption className="text-center text-sm text-gray-400 mt-2">Example of posture detection in action (Test Posture)</figcaption>
        </figure>
        <p>
          Poor posture can exert an impact not just on physical health but also on mental health, creating stress and decreasing confidence. This is why awareness should be created about the importance of good posture and solutions offered to help improve the posture habits of people towards better health and a high quality of life.
        </p>
        <p>
          Also, poor posture can alter the spine&apos;s alignment, creating structural imbalances that can aggravate pre-existing health conditions. Over time, this can lead to chronic pain, reduced flexibility, and an increased risk of injuries. As well as, poor posture can affect how the body functions, including digestion, circulation, and breathing.
        </p>
        <figure className="my-8">
          <Image src="/projects/Edgardo.png" alt="Edgardo Posture Example" width={640} height={480} className="rounded-lg border border-gray-700 mx-auto" />
          <figcaption className="text-center text-sm text-gray-400 mt-2">Posture detection result: Edgardo</figcaption>
        </figure>
        <p>
          It is then of great importance to address these issues through education, ergonomic interventions, and exercise to promote proper alignment and mitigate the negative effects of poor posture on health and well-being.
        </p>
        <figure className="my-8">
          <Image src="/projects/Edna.png" alt="Edna Posture Example" width={640} height={480} className="rounded-lg border border-gray-700 mx-auto" />
          <figcaption className="text-center text-sm text-gray-400 mt-2">Posture detection result: Edna</figcaption>
        </figure>
        <p>
          In order to avoid these problems and enhance the general health and wellbeing, it is imperative to correct improper posture. However, it is critical to evaluate an individual&apos;s posture without the aid of technology. This technology intended to assist healthcare companies, such as medical devices, blockchain, artificial intelligence (AI), cloud computing, and IT systems, is referred to as healthcare technology.
        </p>
      </article>
    </main>
  );
} 