import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  if (item.childrens) {
    return (
      <div
        className={`text-xs py-4 px-4 block transition duration-150 ${
          open ? 'bg-yellow-600 text-black' : 'text-black'
        } border border-transparent rounded`}
      >
        <div className="flex justify-between" onClick={toggleOpen}>
          <span>
            {item.icon && <i className={`${item.icon} mr-2`}></i>}
            {item.title}
          </span>
          <BsChevronDoubleDown
            className={`cursor-pointer transition duration-300 transform ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>
        <div
          className={`py-1/4 mt-2 overflow-hidden ${
            open ? 'h-auto bg-yellow-600' : 'h-0'
          }`}
        >
          {item.childrens &&
            item.childrens.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link
        to={item.path || '#'}
        className="text-xs py-2 text-secondary-200 px-4 block transition duration-150 bg-opacity-10 border border-transparent rounded"
      >
        <span>
          {item.icon && <i className={`${item.icon} mr-2`}></i>}
          {item.title}
        </span>
      </Link>
    );
  }
}
