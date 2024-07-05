const Hero = () => {
  return (
    <section className="bg-[#232F3E] flex h-[70vh] text-center items-center px-[100px] gap-x-10 text-white justify-center py-16">
      <div className=" lg:w-[60%]">
        <div className="flex flex-col justify-center ">
          <h1 className="text-2xl lg:text-6xl font-bold">Munjul</h1>
          <h1 className="text-5xl lg:text-8xl font-bold">FRAGRANCE</h1>
          <h1 className="text-2xl lg:text-6xl font-bold ">Collection</h1>
        </div>
        <div className="mt-8">
          {/* <img src="/path-to-image.png" alt="Fragrance" className="mx-auto" /> */}
        </div>
        <p className="mt-4 px-4 text-xl italic md:px-0">
          Inspired by nature, woody aromas are earthy and spicy.
        </p>
      </div>

      
    </section>
  );
};

export default Hero;
