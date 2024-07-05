import Image from "next/image";

const Ourclients = () => {
  return (
    <section id="reviews" className=" bg-[#E9EFF2] py-16 flex justify-center">
      <div className="w-[80%] ">
        <h2 className=" text-2xl md:text-4xl mb-20 font-bold text-left">Our Clients</h2>
        <div className="flex gap-8 flex-col md:flex-row justify-around space-y-8 md:space-y-0">
          {/* Repeat for each product */}

          <div className="max-w-xs md:mx-0   p-4 flex flex-col justify-between shadow-md rounded-lg">
            <div className="flex h-12 justify-between ">
              <div className="w-[80px] top-[-50px] z-10 h-[80px] border-l-2 relative border-[#232F3E] bg-white rounded-full object-contain ">
                <Image
                  className="rounded-full relative object-contain"
                  fill
                  src="/2.jpeg"
                  alt="Example Image"
                />
              </div>
              <p className="text-right">Calvin Kelvin</p>
            </div>
            <div className=" text-white text-left overflow-y-hidden space-y-2 mb-4">
              <h3 className="text-[16px] text-[#232F3E] font-bold">
                Product Name
              </h3>
              <p className="text-[#232F3E] h-[100px] overflow-y-hidden text-sm">
                {
                  "I will just add random more text or more random text to populate my field for what i am looking for Now this is me just checking out the height property for the scroll bar This is the content that will be here, i don't know what it will be but wben i get to the office my self and Mr Nasir will do it together. Mr Nasir go vex but, omooooo "
                }
              </p>
            </div>
            <div className=" border-t border-[#5c6775] flex items-center justify-between">
              <div>5 stars</div>
              <p className="text-[#232F3E] font-thin text-xs">Text Review</p>
            </div>
          </div>

          <div className="max-w-xs md:mx-0   p-4 flex flex-col justify-between shadow-md rounded-lg">
            <div className="flex h-12 justify-between ">
              <div className="w-[80px] top-[-50px] z-10 h-[80px] border-l-2 relative border-[#232F3E] bg-white rounded-full object-contain ">
                <Image
                  className="rounded-full relative object-contain"
                  fill
                  src="/2.jpeg"
                  alt="Example Image"
                />
              </div>
              <p className="text-right">Calvin Kelvin</p>
            </div>
            <div className=" text-[#232F3E] text-left overflow-y-hidden space-y-2 mb-4">
              <h3 className="text-[16px] text-[#232F3E] font-bold">
                Product Name
              </h3>
              <p className="text-[#232F3E] h-[100px] overflow-y-hidden text-sm">
                {
                  "I will just add random more text or more random text to populate my field for what i am looking for Now this is me just checking out the height property for the scroll bar This is the content that will be here, i don't know what it will be but wben i get to the office my self and Mr Nasir will do it together. Mr Nasir go vex but, omooooo "
                }
              </p>
            </div>
            <div className=" border-t border-[#5c6775] flex items-center justify-between">
              <div>5 stars</div>
              <p className="text-[#232F3E] font-thin text-xs">Text Review</p>
            </div>
          </div>

          <div className="max-w-xs md:mx-0   p-4 flex flex-col justify-between shadow-md rounded-lg">
            <div className="flex h-12 justify-between ">
              <div className="w-[80px] top-[-50px] z-10 h-[80px] border-l-2 relative border-[#232F3E] bg-white rounded-full object-contain ">
                <Image
                  className="rounded-full relative object-contain"
                  fill
                  src="/2.jpeg"
                  alt="Example Image"
                />
              </div>
              <p className="text-right">Calvin Kelvin</p>
            </div>
            <div className=" text-[#232F3E] text-left overflow-y-hidden space-y-2 mb-4">
              <h3 className="text-[16px] text-[#232F3E] font-bold">
                Product Name
              </h3>
              <p className="text-[#232F3E] h-[100px] overflow-y-hidden text-sm">
                {
                  "I will just add random more text or more random text to populate my field for what i am looking for Now this is me just checking out the height property for the scroll bar This is the content that will be here, i don't know what it will be but wben i get to the office my self and Mr Nasir will do it together. Mr Nasir go vex but, omooooo "
                }
              </p>
            </div>
            <div className=" border-t border-[#5c6775] flex items-center justify-between">
              <div>5 stars</div>
              <p className="text-[#232F3E] font-thin text-xs">Text Review</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ourclients;
