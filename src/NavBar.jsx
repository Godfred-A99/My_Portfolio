import NavLinks from "./Components/NavLinks";

const NavBar = () => {
  return (
    <header className=" z-10 w-full bg-bg-color py-8 px-28 max-sm:px-10 ">
      <nav className="flex justify-between items-center">
        <a href="">
          <img
            src="/src/Assets/Images/Logo.png"
            alt="Logo"
            width={130}
            height={70}
          />
        </a>
        <ul className="flex-1  flex gap-16 justify-center items-center font-Mulish text-lg font-semibold leading-normal max-lg:hidden">
          <li>
            <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="#About">About</NavLinks>
          </li>
          <li>
            <NavLinks href="#Projects">Projects</NavLinks>
          </li>
          <li>
            <NavLinks href="#">Blog</NavLinks>
          </li>
          <li>
            <NavLinks href="#">Contact</NavLinks>
          </li>
        </ul>
        <a
          href=""
          className="py-2 px-5 rounded-lg border-none bg-bg-div text-bg-color font-Mulish text-lg max-lg:hidden "
        >
          Create Blog
        </a>
        <div className="hidden max-lg:block">
          <img
            src="/src/Assets/Icons/menu_20dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png"
            alt="hamburgar"
            width={60}
            height={55}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
