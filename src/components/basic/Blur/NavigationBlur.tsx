import { PropsWithChildren, memo } from "react";

interface P extends PropsWithChildren {
  active: boolean;
}

const NavigationBlur: React.FC<P> = ({ children, active }) => {
  return (
    <div
      className={` inset-0 ${
        active
          ? "fixed  backdrop-blur-md"
          : "hidden md:block md:static md:bg-transparent md:backdrop-blur-0"
      } h-full`}
    >
      {children}
    </div>
  );
};

export default memo(NavigationBlur);
