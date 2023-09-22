import { useContext } from "react";
import { BsFillSunFill, BsMoonStars } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <header>
      <div className="items-center h-[60px] flex justify-center text-[1.5rem] font-medium">
        <div>Feedback App </div>
        <div className="absolute right-8">
          {theme == "dark" ? (
            <BsFillSunFill onClick={toggleTheme} cursor={"pointer"} />
          ) : (
            <BsMoonStars onClick={toggleTheme} cursor={"pointer"} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
