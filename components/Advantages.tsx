import React from 'react';

export default function Advantages() {
  return (
    <div id="advantages" className="flex flex-row flex-wrap w-full items-center justify-center bg-gray-900 py-16">
      <div className="w-full p-4 flex flex-col items-center justify-center bg-gray-900 text-gray-200">
        <h3 className="text-2xl font-bold mb-4">Advantages</h3>

        <div className="flex flex-row flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center justify-center rounded-lg bg-gray-900 text-gray-200">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mr-4 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-xl font-bold mt-6">Pay-as-you-go</h4>
                <p className="mt-2 text-center">Only pay for the number of verifications you need</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center justify-center rounded-lg bg-gray-900 text-gray-200">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mr-4 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h3" />
              </svg>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-xl font-bold mt-6">Works in spreadsheets</h4>
                <p className="mt-2 text-center">Simply install the addon in your Google Sheet</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center justify-center rounded-lg bg-gray-900 text-gray-200">
            <div className="flex flex-col items-center justify-center">
              <div>
                <svg
                  className="mr-4 h-6 w-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15V3M12 12H3"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-xl font-bold mt-6">Credits never expire</h4>
                <p className="mt-2 text-center">Never worry about unused credits</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4 flex flex-col items-center justify-center rounded-lg bg-gray-900 text-gray-200">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mr-4 h-6 w-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15V3M12 12H3"
                />
              </svg>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-xl font-bold mt-6">Easy to use</h4>
                <p className="mt-2 text-center">No technical skills required, just install and verify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

