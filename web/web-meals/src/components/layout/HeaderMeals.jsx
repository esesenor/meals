const HeaderMeals = () => {
  return (
    <header className="mb-10">
      <div
        className="bg-gradient-to-t from-rose-300 via-amber-200 to-stone-300
       h-[70px] place-content-between"
      >
        <div className="pl-4">
          <img
            className="h-[70px]"
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
      <div className="bg-black h-12 relative">
        <div
          className="h-[70px] w-[70px] bg-zinc-100 border-1 
        bg-gradient-to-tr from-rose-300 via-amber-100 to-zinc-300
         rounded-full absolute right-0 -translate-x-2/3 -translate-y-[20%] grid place-content-center shadow-lg shadow-zinc-600"
        >
          <div
            className="w-9 h-9 rounded-full bg-gradient-to-bl from-orange-400 via-orange-600 to-red-400
          border-none shadow-md shadow-zinc-500"
          >
            <div className="absolute w-2 h-2 rounded-full bg-zinc-100 border-none top-6 left-9"></div>
          </div>
        </div>
      </div>

      <div className="absolute mt-10 ml-2">
        <button
          to="login"
          className="bg-gradient-to-r from-emerald-800 via-orange-600 to-rose-900  text-white uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-black mx-4 transition-colors shadow-lg shadow-zinc-600"
        >
          Iniciar Sesión
        </button>
        <button
          to="register"
          className="bg-gradient-to-r from-red-700 via-orange-600 to-red-700 text-white uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-black transition-colors shadow-lg shadow-zinc-600"
        >
          Registrarse
        </button>
      </div>
    </header>
  );
};

export default HeaderMeals;
