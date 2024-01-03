import React from 'react'
import SidebarItem from './SideBarItem'
import { items } from './itemsArbolMenu.js'


const MenuSidebar = () => {
    return (
        <div className="bg-orange-900">
          <div className="w-120 bg-orange-900">
            { items.map((item, index) => <SidebarItem key={index} item={item} />) }
          </div>
        </div>

      )
}

export default MenuSidebar