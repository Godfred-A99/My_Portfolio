import NavLinks from "./Components/NavLinks";

const NavBar = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src="./Assets/Images/Logo-removebg-preview.png" alt="Logo" />
        </a>
        <ul>
          <li>
            <NavLinks href="">Home</NavLinks>
          </li>
          <li>
            <NavLinks href="">About</NavLinks>
          </li>
          <li>
            <NavLinks href="">Portfolio</NavLinks>
          </li>
          <li>
            <NavLinks href="">Blog</NavLinks>
          </li>
          <li>
            <NavLinks href="">Contact</NavLinks>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default NavBar;
