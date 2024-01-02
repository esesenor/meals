const HeaderPokeball = () => {
  return (
    <header className="mb-10">
      <div className=" bg-yellow-600 h-16">
        <div className="h-full pl-4">
          <img
            className="h-[40px] xxs:h-full xxs:block w-auto relative z-10 translate-y-4"
            src="../../../public/imgs/meals.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-zinc-300 h-12 relative">
        <div className="h-[70px] w-[70px] bg-white border-8 border-zinc-100 rounded-full absolute right-0 -translate-x-1/2 -translate-y-[20%] grid place-content-center">
          <div className="w-9 h-9 rounded-full bg-yellow-600 border-none"></div>
        </div>
      </div>
    </header>
  );
};

export default HeaderPokeball;
