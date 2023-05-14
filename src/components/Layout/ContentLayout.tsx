import { PropsWithChildren } from "react";

interface P extends PropsWithChildren {}

const ContentLayout: React.FC<P> = ({ children }) => {
  return <section className="p-6 w-full h-full">{children}</section>;
};

export default ContentLayout;
