import React from 'react';
import SidebarItem from './SideBarItem';
import { items } from './itemsArbolMenu.js';

const MenuSidebar = () => {
  return (
    <div className="bg-gradient-to-tr from-orange-100 via-amber-200 to-stone-300">
      <div className="w-120 bg-gradient-to-tr from-orange-100 via-amber-200 to-red-300">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSidebar;
