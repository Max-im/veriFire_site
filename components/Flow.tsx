import Image from 'next/image';

export default function Flow() {
  return (
    <div
      id="about"
      className="animate-fade-in flex flex-col items-center justify-center mt-12 mb-12"
    >
      <h2 className="text-2xl font-bold mb-4 text-left">How to use Email VeriFire</h2>
      <div className="flex flex-wrap flex-col w-full">
        <div className="flex flex-1 flex-row items-center justify-between md:px-0 mx-4 md:mx-0">
          <h3 className="text-xl font-bold mr-4 animate-fade-in-delay-1500">
            Step 1: Prepare a spreadsheet table
          </h3>
          <Image
            src="/slide_01.svg"
            width="300"
            height="150"
            alt="prepare a spreadsheet table"
            className="animate-fade-in-delay-2000"
          />
        </div>
        <div className="flex flex-1 flex-row items-center justify-between md:px-0 mx-4 md:mx-0">
          <Image
            src="/slide_02.svg"
            width="300"
            height="150"
            alt="Click the button"
            className="animate-fade-in-delay-2500"
          />
          <h3 className="text-xl font-bold ml-4 animate-fade-in-delay-3000">
            Step 2: Click the &quot;Verify&quot; button
          </h3>
        </div>
        <div className="flex flex-1 flex-row items-center justify-between md:px-0 mx-4 md:mx-0">
          <h3 className="text-xl font-bold mr-4 animate-fade-in-delay-3500">
            Step 3: Get the verification results
          </h3>
          <Image
            src="/slide_03.svg"
            width="300"
            height="150"
            alt="Get the verification results"
            className="animate-fade-in-delay-4000"
          />
        </div>
      </div>
    </div>
  );
}

