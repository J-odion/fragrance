import Image from "next/image";

const Products = () => {
  return (
    <section className=" bg-[#E9EFF2] py-16 flex justify-center ">
      <div className="w-[80%] flex justify-center gap-y-4 flex-col ">
        <h2 className=" text-2xl md:text-4xl font-bold text-left">
          Best Selling Fragrances
        </h2>
        <div className="mt-8 gap-8 flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
          {/* Repeat for each product */}
          <div className="max-w-xs mx-auto md:mx-0 bg-transparent shadow-md rounded-lg overflow-hidden">
            <Image
              className="rounded-xl"
              width={230}
              height={150}
              src="/1.jpeg"
              alt="Example Image"
            />
            <div className="p-4 text-white text-center bg-[#232F3E]">
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-white">$120.00</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto md:mx-0 bg-transparent flex flex-col justify-between shadow-md rounded-lg overflow-hidden">
            {/* <Image src="/path-to-product-image.png" alt="Product" className="w-full" /> */}
            <Image
              className="rounded-xl"
              width={230}
              height={150}
              src="/2.jpeg"
              alt="Example Image"
            />
            <div className="p-4 text-white text-center bg-[#232F3E]">
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-white">$120.00</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto md:mx-0 bg-transparent flex flex-col justify-between shadow-md rounded-lg overflow-hidden">
            <div className="">
              <Image
                className="rounded-xl"
                width={230}
                height={150}
                src="/3.jpeg"
                alt="Example Image"
              />
            </div>
            <div className="p-4 text-white text-center bg-[#232F3E]">
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-white">$120.00</p>
            </div>
          </div>
          <div className="max-w-xs mx-auto md:mx-0 bg-transparent flex flex-col justify-between shadow-md rounded-lg overflow-hidden">
            {/* <Image src="/path-to-product-image.png" alt="Product" className="w-full" /> */}
            <Image
              className="rounded-xl"
              width={230}
              height={150}
              src="/4.jpeg"
              alt="Example Image"
            />
            <div className="p-4 text-white text-center bg-[#232F3E]">
              <h3 className="text-lg font-bold">Product Name</h3>
              <p className="text-white">$120.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
