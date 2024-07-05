import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#232F3E]  text-white p-4 flex flex-col md:flex-row justify-center items-center">
      <div className="w-[80%] flex justify-center md:justify-between items-center text-white">
        <div className="text-lg font-bold">
          <h1 className="text-center font-extrabold text-4xl md:text-xl">
            PERFUMANIA
          </h1>
        </div>
        <nav className="mt-4 md:mt-0">
          <ul className="md:flex-row hidden md:flex space-y-2 md:space-y-0 md:space-x-4">
            <li>
            <Link href="#reviews">
                <p>Brand</p>
              </Link>
            </li>
            <li>
            <Link href="#reviews">
                <p>Perfumes</p>
              </Link>
              
            </li>
            <li>
            <Link href="#reviews">
                <p>Shop</p>
              </Link>
            </li>
            <li>
              <Link href="#reviews">
                <p>Reviews</p>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hidden md:flex bg-yellow-500 text-dark-blue px-4 py-2 rounded mt-4 md:mt-0">
          GET STARTED
        </button>
      </div>
    </header>
  );
};

export default Header;
