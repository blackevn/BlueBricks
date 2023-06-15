'use client'

import { ClickEvent, Listing } from "@/types/interfaces";
import { useCallback } from "react";
import { IconType } from "react-icons";

type CategortItemsProps = {
     
     icon: IconType
     name: string
     setPropertyInfo:  React.Dispatch<React.SetStateAction<Listing>>
     propertyInfo: Listing
     
}

const CategoryItem: React.FC<CategortItemsProps> = ({ icon: Icon,  name, propertyInfo, setPropertyInfo }) => {

       
  const categorySelect = useCallback(() => {

       setPropertyInfo((prevInfo => ({...prevInfo, category: name})))

  }, [propertyInfo, setPropertyInfo, name])
  return <h1
          onClick={categorySelect}
          className={`rounded-md hover:bg-blue-600 p-4 text-center cursor-pointer flex gap-2 items-center 
          ${propertyInfo.category === name && 'bg-backgroundPrimary'}`}>
            <Icon className="text-xl"/>{name}
        </h1>
};

export default CategoryItem;
