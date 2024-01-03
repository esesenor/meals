const HeaderMeals = () => {
  return (
    <header className="mb-10">
      <div className="bg-yellow-600 h-[40px] place-content-between">
        <div className="pl-4">
          <img
            className="h-[70px] xxs:h-full xxs:block w-auto absolute top-2 z-10"
            src="../../../public/imgs/meals.png"
            alt=""
          />
        </div>
      </div>
      <div className="bg-zinc-300 h-12 relative">
        <div className="h-[70px] w-[70px] bg-zinc-100 border-1 border-yellow-600 rounded-full absolute right-0 -translate-x-1/2 -translate-y-[20%] grid place-content-center shadow-lg shadow-black">
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-bl from-orange-400 via-orange-600 to-red-400
          border-none shadow-xl shadow-zinc-500"
          >
            <div className="absolute w-2 h-2 rounded-full bg-zinc-100 border-none top-6 left-9"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMeals;
