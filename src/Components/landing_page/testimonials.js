import React from "react";
import Image from "next/image";

function Testimonials() {
  return (
    <div className="w-full py-8">
      <div className="max-w-7xl w-full mx-auto text-center">
        <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 text-center py-10">
          If you don&apos;t believe us...
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl w-full mx-auto py-8">
        {/* First Column: 1 div */}
        <div className="p-4 rounded-lg flex items-center justify-center">
          <div
            className="w-full h-full flex items-center justify-center p-4 rounded-lg shadow-md"
            style={{ backgroundColor: "rgba(34,87,122, 0.43)" }}
          >
            <div className="flex items-start ">
              <Image
                src="/emma.svg"
                alt="Testimonial 1"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">
                  Emma J. - Project Manager @ Google
                </h3>
                <p className="mt-2 text-gray-700">
                  &quot;I enrolled in the Project Management Certification course, and it was a fantastic experience. The content was comprehensive, and the instructors were knowledgeable and approachable. I feel much more confident in my skills now. Highly recommend!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column: 2 divs */}
        <div className="grid grid-rows-2 gap-4">
          <div className="p-4 rounded-lg flex items-center justify-center">
            <div
              className="w-full h-full flex items-center justify-center p-4 rounded-lg shadow-md"
              style={{ backgroundColor: "rgba(34,87,122, 0.43)" }}
            >
              <div className="flex items-start">
                <Image
                  src="/rob.svg"
                  alt="Testimonial 2"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    Rob L. - Data Science Intern
                  </h3>
                  <p className="mt-2 text-gray-700">
                    &quot;I was skeptical about the cost initially, but after completing the Data Science Certification course, I can say it was worth every penny. The insights and practical knowledge gained have been invaluable to my career growth.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" p-4 rounded-lg flex items-center justify-center">
            <div
              className="w-full h-full flex items-center justify-center  p-4 rounded-lg shadow-md"
              style={{ backgroundColor: "rgba(34,87,122, 0.43)" }}
            >
              <div className="flex items-start">
                <Image
                  src="/steve.svg"
                  alt="Testimonial 3"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">
                    Steve R. - UI/UX Designer
                  </h3>
                  <p className="mt-2 text-gray-700">
                    &quot;The quality of the course content exceeded my expectations. The videos were clear, and the supplementary materials were very useful. I especially appreciated the real-world examples and case studies.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
