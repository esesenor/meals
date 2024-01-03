import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderList from '../components/pokedex/OrderList';
import HeaderMeals from '../components/layout/HeaderMeals.jsx';
import { paginateData } from '../utils/pagination';

const Pokedex = () => {
  const [orders, setOrders] = useState([]);
  const [orderName, setOrderName] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const trainerName = useSelector((store) => store.trainerName);

  const orderByUser = orders.filter((order) =>
    order.userId.name.includes(orderName)
  );

  const { itemsInCurrentPage, pagesInCurrenBlock, lastPage } = paginateData(
    orderByUser,
    currentPage
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderName(e.target.orderName.value.toLowerCase().trim());
  };

  const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  };

  //Traer los orders
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/v1/orders')
      .then(({ data }) => setOrders(data.results))
      .catch((error) => console.log(error));
  }, []);

  //? Solucion bug paginas: actualiza la pagina a 1 al cambiar de pagina
  useEffect(() => {
    setCurrentPage(1);
  }, [currentType]);

  const handlePreviusPage = () => {
    const newCurrentPage = currentPage - 1;
    if (newCurrentPage >= 1) setCurrentPage(newCurrentPage);
  };

  const handleNextPage = () => {
    const newCurrentPage = currentPage + 1;
    if (newCurrentPage <= lastPage) setCurrentPage(newCurrentPage);
  };

  return (
    <main className="">
      <HeaderMeals />

      <section>
        <p className="m-4">
          <span className=" text-red-600 font-bold">
            Welcome {trainerName},{' '}
          </span>
          here you can find your favorite order!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap justify-center max-w-screen-xl mx-auto p-4 gap-4"
        >
          <div className="w-full md:w-1/2 flex items-center">
            <input
              name="orderName"
              type="text"
              className="flex-grow bg-white shadow-md text-sm h-12"
            />
            <button className="bg-red-600 w-[60px] h-12 text-white p-2 shadow-md hover:bg-red-400 hover:text-black">
              Search
            </button>
          </div>
          <select
            onChange={handleChangeType}
            className="capitalize w-full md:w-[350px] shadow-md h-12 p-2 text-sm"
          >
            <option value="">All orders</option>
            {types.map((type) => (
              <option key={type.url} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      <OrderList orders={itemsInCurrentPage} />

      <ul className="flex justify-center gap-4 p-4 flex-wrap">
        {currentPage !== 1 && (
          <li>
            <button
              className="text-2xl font-extrabold"
              onClick={handlePreviusPage}
            >
              {'<'}
            </button>
          </li>
        )}
        {pagesInCurrenBlock.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page)}
              className={`relative p-2 h-10 w-10 z-0 place-content-center font-extrabold text-white 
              rounded-full shadow-xl shadow-red-800 ${
                currentPage === page ? 'bg-amber-600' : 'bg-red-600'
              }
              hover:shadow-yellow-500`}
            >
              <div className="absolute -z-10 h-5 w-5 top-[27%] left-[26%] rounded-full bg-black"></div>
              <div className="absolute -z-10 h-1 w-full top-[45%] left-0 bg-black"></div>
              <div className="absolute -z-20 h-5 w-full top-[50%] rounded-bl-full rounded-br-full left-0 bg-white"></div>
              {page}
            </button>
          </li>
        ))}

        {currentPage !== lastPage && (
          <li>
            <button
              className="text-2xl font-extrabold"
              onClick={handleNextPage}
            >
              {'>'}
            </button>
          </li>
        )}
      </ul>
    </main>
  );
};
export default Pokedex;
