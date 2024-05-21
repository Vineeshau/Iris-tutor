import React from "react";
import Image from "next/image";

function Page() {
  return (
    <div className="flex flex-col py-1">
      <div className="flex-1 p-4 py-10 flex items-center justify-center">
        <h3 className="text-2xl lg:text-5xl font-bold text-black max-w-xs lg:max-w-none text-center">
          What People Say
        </h3>
      </div>
      <div className="flex-1 p-4 py-3">
        <p className="text-gray-700 mb-1 text-center text-lg">
          Join <span className="font-bold">10,000</span> happy customers
          worldwide who are already using our amazing product.
        </p>
      </div>
      <div className="flex-1 p-4">
        <div className="px-1 sm:px-20">
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 p-4 mb-8 sm:mb-0">
              <Image
                src="/morgan.png"
                width={65}
                height={50}
                alt="Image 1"
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 mb-2 text-center">
              &quot;When you innovate, you make mistakes. It is best to admit them
                quickly, and get on with improving your other innovations.&quot;
              </p>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Morgan James
              </h3>
              <p className="text-gray-700 mb-2 text-center">Co-Founder & CEO</p>
            </div>

            <div className="flex-1 p-4 mb-8 sm:mb-0">
              <Image
                src="/morgan.png"
                width={65}
                height={50}
                alt="Image 2"
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 mb-2 text-center">
              &quot;Technology is just a tool. In terms of getting the kids working
                together and motivating them, the teacher is the most
                important.&quot;
              </p>
              <h3 className="text-lg font-semibold mb-2 text-center">
                John Smith
              </h3>
              <p className="text-gray-700 mb-2 text-center">Co-Founder & CTO</p>
            </div>

            <div className="flex-1 p-4 mb-8 sm:mb-0">
              <Image
                src="/morgan.png"
                width={65}
                height={50}
                alt="Image 3"
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 mb-2 text-center">
              &quot;Design everything on the assumption that people are not
                heartless or stupid but marvelously capable, given the chance.&quot;
              </p>
              <h3 className="text-lg font-semibold mb-2 text-center">
                Amy Schneider
              </h3>
              <p className="text-gray-700 mb-2 text-center">Lead Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
