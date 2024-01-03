import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderCard = ({ orderURL }) => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    if (orderURL)
      axios
        .get(orderURL)
        .then(({ data }) => setOrders(data))
        .catch((error) => console.log(error));
  }, []);

  return (
    <Link
      to={`/orders/${orders?.id}`}
      className={`capitalize bg-slate-50 border-4 rounded-lg w-[261px] h-[383px] z-50 shadow-md shadow-black/50 
    hover:shadow-xl hover:shadow-yellow-600 transition-all focus:ring focus:ring-zinc-300`}
    >
      <header className={`w-full h-[60%] text-center p-0 mb-0 -z-50`}></header>

      <ul className="mt-4 mx-auto text-center p-2 grid grid-cols-2 text-sm gap-4">
        {orders?.map((ord) => (
          <li className={`grid gap-1`} key={ord.meal.name}>
            <h3 className="text-xs text-zinc-500">Orden</h3>
            <h3 className="text-xs text-zinc-500">Meal: {ord.meal.name}</h3>
            <h6 className="text-xs text-zinc-500">Price: {ord.meal.price}</h6>
            <h6 className="text-xs text-zinc-500">
              Restaurante: {ord.meal.restaurant.name}
            </h6>
            <h6 className="text-xs text-zinc-500">
              Restaurante: {ord.meal.restaurant.rating}
            </h6>
            <span className="font-bold text-xl text-red-950">
              {ord.base_ord}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
};
export default OrderCard;
