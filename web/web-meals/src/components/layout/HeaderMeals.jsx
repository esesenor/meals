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
        {/* Search Bar */}
        {/* <div className="flex items-center">
          <input
            id="i_buscar"
            type="text"
            placeholder="Buscar"
            className="py-2 px-4 mr-4 bg-secondary-900 text-secondary-400 outline-none rounded-lg"
          />
         
        </div> */}
        {/* Authentication Buttons */}
      </div>
      <div className="bg-zinc-300 h-12 relative">
        <div className="h-[70px] w-[70px] bg-zinc-100 border-1 border-yellow-600 rounded-full absolute right-0 -translate-x-2/3 -translate-y-[20%] grid place-content-center shadow-lg shadow-black">
          <div className="w-9 h-9 rounded-full bg-yellow-600 border-none shadow-md shadow-zinc-300">
            <div className="absolute w-2 h-2 rounded-full bg-zinc-100 border-none top-6 left-9"></div>
          </div>
        </div>
      </div>

      <div className="absolute mt-10 ml-2">
        <button
          to="login"
          className="bg-primary text-black uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-red-800 mx-4 transition-colors"
        >
          Iniciar Sesión
        </button>
        <button
          to="register"
          className="bg-primary text-black uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-violet-900 transition-colors"
        >
          Registrarse
        </button>
      </div>
    </header>
  );
};

export default HeaderMeals;
