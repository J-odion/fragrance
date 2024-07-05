import Image from "next/image";
// import img1 from '/1.jpeg';

const Features = () => {
  return (
    <section className="py-16 flex flex-col lg:flex-row justify-center  items-left gap-x-10 text-center">
      <div className="w-full lg:w-[80%] flex gap-10 flex-col-reverse lg:flex-row justify-between items-center ">
        <div className=" w-full md:w-[55%] text-center md:text-left px-8 ">
          <h2 className=" text-2xl md:text-4xl font-bold ">
            The long-lasting fragrance makes for a perfect refreshing every day
            scent
          </h2>

          <div className="mt-8 flex gap-x-5 flex-col md:flex-row justify-around space-y-8 md:space-y-0">
            <div className="">
              <h3 className="text-xl font-bold">
                Perfumes of all times
              </h3>
              <p>
                The long-lasting fragrance makes for a perfect refreshing every
                day scent that can be worn all year round.
              </p>
            </div>

            <div className="max-w-sm mx-auto md:mx-0">
              <h3 className="text-xl font-bold">Customer Reviews</h3>
              <p>
                Thousands have praised perfumes for the longest and most durable
                fragrances.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center md:w-[35%]">
          <Image width={230} height={150} src="/1.jpeg" alt="Example Image" />
        </div>
      </div>
    </section>
  );
};

export default Features;
