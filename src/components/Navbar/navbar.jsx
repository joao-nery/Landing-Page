export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 border-2">
      <picture className="flex justify-center items-center">
        <div className="w-10 h-10 rounded-full bg-red-400"></div>
        <p className="ml-2 font-bold">BrandBuss</p>
      </picture>
      <ul className="flex gap-2 font-semibold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
        <li className="hover:bg-gray-100 p-1 rounded-md">
          <a href="#home" className="text-red-400">Home</a>
        </li>
        <li className="hover:bg-gray-100 p-1 rounded-md">
          <a href="#about">About</a>
        </li>
        <li className="hover:bg-gray-100 p-1 rounded-md">
          <a href="#services">Services</a>
        </li>
        <li className="hover:bg-gray-100 p-1 rounded-md">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
