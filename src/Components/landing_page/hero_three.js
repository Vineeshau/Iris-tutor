import React from "react";

function HeroThree() {
  return (
    <div
      className="flex flex-col md:flex-row justify-center px-4 py-8"
      style={{ backgroundColor: "rgba(104, 176, 171, 0.3)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-xl">
        <div className="p-4 flex flex-col items-center justify-center text-center md:text-left">
          <div className="max-w-7xl w-full mx-auto text-center md:text-left px-4 md:px-8 lg:px-16">
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-900 py-4 md:py-8 lg:py-10">
              Discover <span className="text-[#22577A]">Iris</span>
              <br />
              <span className="text-[#22577A] mt-2 md:mt-4 block">
                Tutor <span className="text-black">Today!</span>
              </span>
            </h3>
          </div>

          <p className="text-sm md:text-base lg:text-lg mt-4 md:mt-6 lg:mt-6">
            Iris Tutor is a versatile and user-friendly platform designed to
            help organizations create customized training programs across
            various verticals to meet their specific needs. It offers a robust
            suite of tools for building courses, enrolling trainees, managing
            their learning experiences, and assessing their progress through
            testing. Additionally, Iris Tutor is an excellent resource for
            freelancers who wish to conduct their own tutorial sessions,
            providing them with the technology to effectively manage and deliver
            their content.
          </p>
        </div>

        <div className="p-4 flex items-center justify-center">
          <video
            controls
            className="w-full max-w-full md:max-w-md lg:max-w-lg rounded-lg"
            style={{ maxHeight: "500px" }}
          >
            <source src="iris_tutor.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroThree;
