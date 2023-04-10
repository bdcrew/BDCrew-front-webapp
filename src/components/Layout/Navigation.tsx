import { useState } from "react";
import NavigationBlur from "../Blur/NavigationBlur";
import NavigationTitle from "../Text/NavigationTitle";

interface P {}

const Navigation: React.FC<P> = () => {
  const [mobileOpenNav, setMobileOpenNav] = useState(false);

  return (
    <>
      <div className="md:hidden flex justify-between">
        <div
          onClick={() => {
            setMobileOpenNav(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <NavigationBlur active={mobileOpenNav}>
        <nav className="w-full md:w-64 absolute  md:static md: h-full p-3 border ">
          <div className={`static h-12 md:hidden `}>a</div>
          <div className=" border-2 rounded-md border-red-500  text-red-600">
            <NavigationTitle customize="border-b-red-500">신고</NavigationTitle>
            <ul className="px-3 space-y-2 py-1">
              <li>🤸‍♂️_탈주자</li>
              <li>💩_똥사개</li>
              <li>💕_혼인신고</li>
            </ul>
          </div>
        </nav>
      </NavigationBlur>
    </>
  );
};

export default Navigation;
