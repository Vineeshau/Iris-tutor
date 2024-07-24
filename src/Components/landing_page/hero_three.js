import React from "react";

function HeroThree() {
  return (
    <div
      className="flex justify-center px-4 py-8"
      style={{ backgroundColor: "rgba(104, 176, 171, 0.3)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-8xl">
        {/* Text and Description Column */}
        <div className="p-4 flex flex-col items-center justify-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-relaxed">
              Discover <span className="text-[#22577A]">Iris</span>
              <br />
              <span className="text-[#22577A] mt-4 block">
                Tutor <span className="text-black">Today!</span>
              </span>
            </h1>
          </div>
          <p className="md:text-lg lg:text-xl max-w-xl mx-auto">
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

        {/* Video Column */}
        <div className="p-4 flex items-center justify-center">
          <video controls className="w-full max-w-full md:max-w-lg rounded-lg">
            <source src="iris_tutor.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroThree;
