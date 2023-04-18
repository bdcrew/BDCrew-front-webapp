import { useState } from "react";
import NavigationBlur from "../Blur/NavigationBlur";
import NavigationTitle from "../Text/NavigationTitle";
import { useRouter } from "next/router";

interface P {}

const Navigation: React.FC<P> = () => {
  const navigator = useRouter();
  const [mobileOpenNav, setMobileOpenNav] = useState(false);

  return (
    <div>
      <div className="w-full flex md:hidden p-2 border-b-2">
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
        <nav className="w-full md:w-64 absolute  md:static md: h-full p-3 ">
          <div className={`static h-12 md:hidden w-full text-center`}>Menu</div>
          <div className="space-y-2">
            <div
              className="border-2 rounded-md border-red-500  text-red-600 cursor-pointer"
              onClick={() => {
                navigator.push("/youtube");
              }}
            >
              <NavigationTitle customize="border-b-red-500">
                Youtube
              </NavigationTitle>
              {/* <ul className="px-3 space-y-2 py-1">
              <li>🤸‍♂️_탈주자</li>
              <li>💩_똥사개</li>
              <li>💕_혼인신고</li>
            </ul> */}
            </div>
            <div
              className="border-2 rounded-md border-orange-500  text-orange-600 cursor-pointer"
              onClick={() => {
                navigator.push("/photo-book");
              }}
            >
              <NavigationTitle customize="border-b-orange-500">
                Photo Book
              </NavigationTitle>
            </div>
            <div
              className="border-2 rounded-md border-purple-500  text-purple-600 cursor-pointer"
              onClick={() => {
                navigator.push("/guest-book");
              }}
            >
              <NavigationTitle customize="border-b-purple-500">
                Guest Book
              </NavigationTitle>
            </div>
            <div
              className="border-2 rounded-md border-gray-500  text-gray-600 cursor-pointer"
              onClick={() => {
                navigator.push("/youtube");
              }}
            >
              <NavigationTitle customize="border-b-gray-500">
                Test
              </NavigationTitle>
              <ul className="px-3 space-y-2 py-1">
                <li>🤸‍♂️_탈주자</li>
                <li>💩_똥사개</li>
                <li>💕_혼인신고</li>
              </ul>
            </div>
          </div>
        </nav>
      </NavigationBlur>
    </div>
  );
};

export default Navigation;
