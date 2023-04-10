import { PropsWithChildren, memo } from "react";

interface P extends PropsWithChildren {
  active: boolean;
}

const NavigationBlur: React.FC<P> = ({ children, active }) => {
  return (
    <div
      className={` inset-0 ${
        active ? "fixed" : "hidden"
      } md:static md:bg-transparent backdrop-blur-md md:backdrop-blur-0`}
    >
      {children}
    </div>
  );
};

export default memo(NavigationBlur);
