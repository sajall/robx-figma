const Header = () => {
  return (
    <>
      <div className="gradient w-[100%] h-[100vh]">
        <div className="flex justify-between items-center w-[85%] m-auto p-3">
          <img src="logo.png" alt="" />
          <img src="grid.png" alt="" />
        </div>
        <div className="text-white w-full md:w-[30%] m-auto flex flex-col gap-3 justify-center items-center mt-[12%] ">
          <span className="text-[30px] font-bold text-center">WEB MAGNETISM</span>
          <p className="text-center">
            Transforming Businesses with unique Web design and strategic digital
            marketing for impactful online visibility.
          </p>
          <img src="button.png" alt="" className="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Header;
