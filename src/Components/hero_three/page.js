import React from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <div className="flex flex-col h-full py-10">
      <div className="flex items-center justify-center py-20">
        <h2 className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none">
          IrisTutor Features
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row px-10 lg:px-40">
        <div className="flex-grow p-2  flex flex-col items-center">
          <Image src="/course.png" width={100} height={50} alt="Image" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Course Roadmap
          </h3>
          <p className="text-gray-1000 mb-2 text-center">
            Manage individual permissions using our granular privacy settings,
            and keep track of everything at a glance with high-level,
            multi-project visibility.
          </p>
          <Link href="#" className="text-blue-500 text-center">
          Read more
            </Link>
        </div>

        <div className="flex-grow p-4 flex flex-col items-center">
          <Image src="/visibility.png" width={100} height={50} alt="Image" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Get better visibility
          </h3>
          <p className="text-gray-1000 mb-2 text-center">
            Treat your teams like pros. Empower them to work autonomously,
            without losing sight of what’s happening.
          </p>
          <Link href="#" className="text-blue-500 text-center">
          Read more
            </Link>
        </div>

        <div className="flex-grow p-4 flex flex-col items-center">
          <Image src="/centralize.png" width={100} height={50} alt="Image" />
          <h3 className="text-lg font-semibold mb-2 text-center">
            Centralize all project information
          </h3>
          <p className="text-gray-700 mb-2 text-center">
            Your teammates can zoom in to the details of every task and you can
            zoom out to manage the big picture.
          </p>
          <Link href="#" className="text-blue-500 text-center">
          Read more
            </Link>
        </div>
      </div>
      <div className="flex items-center justify-center py-20">
        <iframe
          className="max-w-full"
          width="600"
          height="300"
          src="iris_tutor.mp4"
          frameborder="0"
          allowfullscreen
          autoplay="false" 
        ></iframe>
      </div>
    </div>
  );
}

export default Page;
