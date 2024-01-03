import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { ImHome } from 'react-icons/im';
import MenuSidebar from './MenuSideBar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll text-white fixed xl:static w-[60%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 
        bg-gradient-to-tr from-red-200 via-amber-200 to-stone-300
        p-4 flex flex-col justify-between z-50 ${
          showMenu ? 'left-0' : '-left-full'
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-black mb-10">
            Menu<span className="text-black text-3xl"></span>
          </h1>
          <MenuSidebar></MenuSidebar>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>
      {/*Boton flotante para movil Esconde el Sidebar */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-8 w-16 h-16 bg-secondary-400 text-primary p-5 rounded-full z-50 flex items-center justify-center"
      >
        {showMenu ? (
          <RiCloseLine className="w-8 h-8" />
        ) : (
          <RiMenu3Line className="w-8 h-8" />
        )}
      </button>
    </>
  );
};

export default SideBar;
