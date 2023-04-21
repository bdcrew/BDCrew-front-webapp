import { PropsWithChildren } from "react";

interface P extends PropsWithChildren, ButtonProps {}

const BasicButton: React.FC<P> = ({ children, ...props }) => {
  return <button className="h-10">{children}</button>;
};

export default BasicButton;
