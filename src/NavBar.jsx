import NavLinks from "./Components/NavLinks";

const NavBar = () => {
  return (
    <header>
      <nav className="flex justify-between items-center w-full z-10 ">
        <a href="/">
          <img
            src="src/Assets/Images/Logo.png"
            alt="logo"
            width={175}
            height={172}
          />
        </a>
        <div className="flex justify-center items-center ">
          <ul className="flex gap-5 text-lg justify-center items-center block max-sm:hidden font-semibold font-Roboto_Slab">
            <li>
              <NavLinks href="/">Home</NavLinks>
            </li>
            <li>
              <NavLinks href="#">About</NavLinks>
            </li>
            <li>
              <NavLinks href="#">Portfolio</NavLinks>
            </li>
            <li>
              <NavLinks href="#">Blog</NavLinks>
            </li>
            <li>
              <NavLinks href="#">Contact</NavLinks>
            </li>
          </ul>
          <div className="flex justify-center items-center hidden max-sm:block pr-3">
            <img
              src="src/Assets/Icons/menu_20dp_E8EAED_FILL0_wght400_GRAD0_opsz20.png"
              alt=" hamburgar"
              width={70}
              height={60}
            />
          </div>
        </div>
      </nav>
      
    </header>
  );
};

export default NavBar;
