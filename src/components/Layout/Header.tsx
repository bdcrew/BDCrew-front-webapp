import { PAGE_INFO } from "@/src/constants/page";
import { useRouter } from "next/router";

interface P {}

const Header: React.FC = () => {
  const { asPath } = useRouter();
  const colors = Object.keys(PAGE_INFO)
    .map((key) => {
      const info = PAGE_INFO[key as keyof typeof PAGE_INFO];
      if (asPath.includes(info.path)) {
        return info.color;
      }
      return;
    })
    .filter((data) => !!data);
  const color = colors.length > 0 ? colors[0] : "white";

  console.log("color", colors);

  return (
    <header
      className={`bg-${color}-500 border-b-2 border-${color}-600 h-14 w-full flex justify-between px-2 items-center`}
    >
      <div className="space py-2 px-4 rounded text-white whitespace-nowrap">
        로고
      </div>
      <div className="flex space-x-2 text-white">
        <div>Introduce</div>
        <div>Project</div>
        <div>Member</div>
        <div>Playground</div>
      </div>
    </header>
  );
};

export default Header;
