import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { bgByType, borderByType } from '../../constants/review';

const PokemonCard = ({ reviewURL }) => {
  const [review, setReview] = useState(null);

  const types = review?.types.map((type) => type.type.name).join(' / ');

  useEffect(() => {
    if (reviewURL)
      axios
        .get(reviewURL)
        .then(({ data }) => setReview(data))
        .catch((error) => console.log(error));
  }, []);

  const fisrtType = review?.types[0].type.name;

  return (
    <Link
      to={`/reviews/${review?.id}`}
      className={`capitalize bg-slate-50 border-4 rounded-lg w-[261px] h-[383px] z-50 shadow-md shadow-black/50 ${borderByType[fisrtType]}
      hover:shadow-xl hover:shadow-yellow-600 transition-all focus:ring focus:ring-zinc-300`}
    >
      <header className={`w-full h-[60%] text-center p-0 mb-0 -z-50`}>
        <div className={`${bgByType[fisrtType]} relative w-full h-1/2`}></div>
        <div className="relative -top-20">
          <div className="bg-transparent">
            <div
              className="absolute -z-5 h-1 w-1 top-[25%] left-[45%] rounded-full bg-green-400/90 border-green-400 shadow-[0_3px_60px_50px_rgba(0,255,179,0.5)] 
          shadow-yellow-200"
            ></div>
            <img
              className="mx-auto w-[50%] animate-fn1"
              src={
                review
                  ? review.sprites.other['official-artwork'].front_default
                  : '/images/mirey.png'
              }
              alt=""
            />
          </div>
          <h3 className="font-bold text-xl text-red-950">{review?.name}</h3>
          <span className=" text-sm">{types}</span>
          <h5 className=" text-xs text-slate-500">type</h5>
          <div className="mt-2 mx-auto h-[1px] w-[90%] bg-gradient-to-br from-violet-950 via-yellow-400 to-red-950"></div>
        </div>
      </header>

      <ul className="mt-4 mx-auto text-center p-2 grid grid-cols-2 text-sm gap-4">
        {review?.stats.slice(0, 4).map((stat) => (
          <li className={`grid gap-1`} key={stat.stat.name}>
            <h6 className="text-xs text-zinc-500">{stat.stat.name}</h6>
            <span className="font-bold text-xl text-red-950">
              {stat.base_stat}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
};
export default PokemonCard;
