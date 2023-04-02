interface P {}

const Navigation: React.FC<P> = () => {
  return (
    <nav className="w-80 absolute  md:static md: h-full p-3">
      Navigation
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
      <h5 className="font-semibold text-slate-900">Title</h5>
      <ul className="px-2">
        <li>li</li>
        <li>li</li>
        <li>li</li>
      </ul>
    </nav>
  );
};

export default Navigation;
