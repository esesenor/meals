const HeaderMeal = () => {
  return (
    <div className="flex flex-col items-center bg-secondary-900 pb-5">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-8 py-4 bg-orange-800">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/public/imgs/meals.png"
            alt="Dapper Men's Logo"
            className="w-8 h-8 mr-2"
          />
          <h1 className="text-2xl font-bold text-gray-800 ">SuperMarket EyM</h1>
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
        <div className="flex items-center">
          <button
            to="login"
            className="bg-primary text-black uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-green-900 mx-4 transition-colors"
          >
            Iniciar Sesión
          </button>
          <button
            to="register"
            className="bg-primary text-black uppercase font-bold text-sm py-2 px-4 rounded-lg hover:text-blue-900 transition-colors"
          >
            Registrarse
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default HeaderMeal;
