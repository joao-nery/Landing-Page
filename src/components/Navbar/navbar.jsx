import imageExemple from "../../Images/ImageExemple.png";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 border-2">
      <picture>
        <img
          src={imageExemple}
          alt="Logo"
          width="50px"
          className="rounded-full h-12"
        />
      </picture>
      <ul className="flex gap-5">
        <li className="hover:bg-gray-100 p-1 rounded-md">
          <a href="#home">Home</a>
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
