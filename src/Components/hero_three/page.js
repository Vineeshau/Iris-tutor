import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="flex flex-col h-full py-10">
      <div className="flex items-center justify-center py-20">
        <h2 className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none">
          IrisTutor Features
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row px-10 lg:px-40 gap-8">
        <div className="flex-grow p-4 flex flex-col items-center text-center object-fill">
          <img
            className="object-cover mb-4"
            loading="lazy"
            alt="Course Roadmap"
            src="/course.png"
          />
          <h3 className="text-lg font-semibold mb-2">Course Roadmap</h3>
          <p className="text-gray-700 mb-4">
            Manage individual permissions using our granular privacy settings,
            and keep track of everything at a glance with high-level,
            multi-project visibility.
          </p>
          <div className="mt-auto">
            <Link href="#" className="text-blue-500">
              Read more
            </Link>
          </div>
        </div>

        <div className="flex-grow p-4 flex flex-col items-center text-center object-fill">
          <img
            className="object-cover mb-4"
            loading="lazy"
            alt="Get better visibility"
            src="/visibility.png"
          />
          <div className="mt-auto">
          <h3 className="text-lg font-semibold mb-4">Get better visibility</h3>
          <p className="text-gray-700">
            Treat your teams like pros. Empower them to work autonomously,
            without losing sight of what’s happening.
          </p>
          </div>
          <div className="mt-auto">
            <Link href="#" className="text-blue-500">
              Read more
            </Link>
          </div>
        </div>

        <div className="flex-grow p-4 flex flex-col items-center text-center object-fill">
          <img
            className="object-cover mb-4"
            loading="lazy"
            alt="Centralize all project information"
            src="/centralize.png"
          />
          <div className="mt-auto">
          <h3 className="text-lg font-semibold mb-2">
            Centralize all project information
          </h3>
          <p className="text-gray-700">
            Your teammates can zoom in to the details of every task and you can
            zoom out to manage the big picture.
          </p>
          </div>
          <div className="mt-auto">
            <Link href="#" className="text-blue-500">
              Read more
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-20">
        <iframe
          className="max-w-full"
          width="600"
          height="300"
          src="iris_tutor.mp4"
          allowFullScreen
          autoPlay={false}
        ></iframe>
      </div>
    </div>
  );
}

export default Page;
