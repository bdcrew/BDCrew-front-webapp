import { PropsWithChildren, memo } from "react";

interface P extends PropsWithChildren {
  fontColor?: string;
}

const ContentTitle: React.FC<P> = ({ children, fontColor }) => {
  return (
    <header className={`text-3xl font-bold ${fontColor}`}>{children}</header>
  );
};

export default memo(ContentTitle);
