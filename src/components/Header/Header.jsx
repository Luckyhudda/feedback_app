import { BsFillSunFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="items-center h-[60px] flex justify-center text-[1.5rem] font-medium">
        <div>Feedback App </div>
        <div className="absolute right-8">
          <BsFillSunFill />
        </div>
      </div>
    </header>
  );
};

export default Header;
