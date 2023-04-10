import { PropsWithChildren } from "react";

interface P extends PropsWithChildren {
  customize?: string;
}

const NavigationTitle: React.FC<P> = ({ children, customize }) => {
  return (
    <h5 className={`font-semibold py-1 px-1 border-b-2 ${customize}`}>
      {children}
    </h5>
  );
};

export default NavigationTitle;
