'use client'

import { ClickEvent, Listing } from "@/types/interfaces";
import { useCallback } from "react";
import { IconType } from "react-icons";

type CategortItemsProps = {
     
     icon: IconType
     name: string
     setPropertyInfo:  React.Dispatch<React.SetStateAction<Listing>>
     propertyInfo: Listing
     selected?: boolean
     
}

const CategoryItem: React.FC<CategortItemsProps> = ({selected, icon: Icon,  name, propertyInfo, setPropertyInfo }) => {

       
  const categorySelect = useCallback(() => {

       setPropertyInfo((prevInfo => ({...prevInfo, category: name})))

  }, [propertyInfo, setPropertyInfo, name])

  return <h1
          onClick={categorySelect}
          className={`rounded-md hover:bg-blue-600 p-4 cursor-pointer flex gap-2 items-center 
          ${selected && 'bg-gray-3'}`}>
          <span className="flex gap-4 items-center">
            <Icon className="text-xl"/><span>{name}</span>
          </span>
        </h1>
};

export default CategoryItem;
