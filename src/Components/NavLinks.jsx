import { useState } from "react";

const NavLinks = ({ href, children }) => {
  const [isActive, setIsActive] = useState("");

  const handleClick = () => {
    setIsActive(href);
  };
  return (
    <div>
      <a
        href={href}
        onClick={handleClick}
        className={`transition-colors duration-200  ${
          isActive === href
            ? "text-orange-500"
            : "text-white hover:text-orange-500"
        }`}
      >
        {children}
      </a>
    </div>
  );
};

export default NavLinks;
