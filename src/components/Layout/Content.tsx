import { PropsWithChildren } from "react";
import SideMenu from "../Nav/NavPrefix1280";

interface P extends PropsWithChildren {}

const Content: React.FC<P> = ({ children }) => {
  return <section className="px-2 py-3 w-full h-full">{children}</section>;
};

export default Content;
