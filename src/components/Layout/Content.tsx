import { PropsWithChildren } from "react";

interface P extends PropsWithChildren {}

const Content: React.FC<P> = ({ children }) => {
  return <section className="px-2 py-3 w-full h-full">{children}</section>;
};

export default Content;
