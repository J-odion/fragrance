import Image from "next/image";

const Overview = () => {
  return (
    <section className=" bg-[#232F3E] h-[95vh] md:h-[50vh] gap-x-4 lg:h-[70vh] p-0 w-full text-left items-center flex justify-center">
      <div className="w-[80%]">
        <div className="mt-8 flex flex-col items-center md:flex-row justify-around space-y-8 md:space-y-0">
          {/* Repeat for each product */}
          <div className="w-[30%] bg-transparent md:flex flex-col hidden  rounded-lg overflow-hidden">
            <div className="p-4 text-white text-left bg-[#232F3E]">
              <h3 className="text-2xl font-bold mb-3 space-y-4">Signature</h3>
              <h3 className="text-2xl font-bold mb-3 space-y-4">Gift for Her</h3>
              <h3 className="text-2xl font-bold mb-3 text-[#ffffff]">
              {/* <h3 className="text-2xl font-bold text-[#232F3E]"> */}
                Gift for Him
              </h3>
              {/* <div className="py-2 px-4 bg-white rounded-full ">
              </div> */}
              <h3 className="text-2xl mb-3 font-bold">Birthday Gift</h3>
            </div>
          </div>

          <div className="bg-transparent w-full md:w-[40%] flex flex-col justify-center items-center  rounded-lg">
            <div className="flex justify-center w-[60%]">
              <Image
                className="rounded-xl w-full object-contain"
                width={230}
                height={150}
                src="/3.jpeg"
                alt="Example Image"
              />
            </div>
          </div>

          <div className="w-full md:w-[30%] bg-transparent flex flex-col justify-between  rounded-lg overflow-hidden">
            <div className="py-4 text-white  border-b text-left bg-[#232F3E]">
              <h3 className="text-2xl font-bold">Brand Name</h3>
              <p className="text-white">Name of brand</p>
            </div>

            <div className="py-4 text-white  border-b text-left bg-[#232F3E]">
              <h3 className="text-2xl font-bold">Product for</h3>
              <p className="text-white">Name of brand</p>
            </div>

            <div className="py-4 text-white  border-b text-left bg-[#232F3E]">
              <h3 className="text-2xl font-bold">Classification</h3>
              <p className="text-white">Name of brand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
