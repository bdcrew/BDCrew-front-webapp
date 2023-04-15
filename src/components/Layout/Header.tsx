interface P {}

const Header: React.FC = () => {
  return (
    <header className="border-b-2 h-14 w-full flex justify-between px-2 items-center">
      <div className="space py-2 px-4 rounded text-white whitespace-nowrap">
        로고
      </div>
      <div className="flex space-x-2">
        <div>Introduce</div>
        <div>Project</div>
        <div>Member</div>
        <div>Playground</div>
      </div>
    </header>
  );
};

export default Header;
