const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-black shadow-xl">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="font-montserrat font-bold text-white">CV MASTER</h1>
        <button className="px-6 py-2 bg-white text-blue-600 font-semibold transition-all hover:shadow-xl hover:scale-105">
          Download
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
