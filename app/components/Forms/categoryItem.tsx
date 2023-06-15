'use client'

import { ClickEvent, Listing } from "@/types/interfaces";
import { IconType } from "react-icons";

type CategortItemsProps = {
     selected?: boolean
     icon: IconType
     name: string
     onClick?: ClickEvent 
}

const CategoryItem: React.FC<CategortItemsProps> = ({ icon: Icon, selected, name, onClick }) => {

  return <h1
          onClick={onClick}
          className="rounded-md hover:bg-backgroundSecondary p-4 text-center cursor-pointer flex gap-2 items-center">
            <Icon className="text-xl"/>{name}
        </h1>
};

export default CategoryItem;
