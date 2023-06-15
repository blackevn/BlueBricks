'use client'

import {useContext, createContext, useState } from "react";
import { IProps, ContextData, Listing } from "@/types/interfaces";
import { useToggle, useHeight, useWidth, useAddProperty } from "../hooks";


const GeneralContext = createContext<ContextData>({   

   height: 0,
   width: 0

}) 

export const GeneralAppContext = ({ children }: IProps) => {

  
  const initialListingInfo: Listing = {
    category: '',
    description: ''
}

const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)

    const [ height ] = useHeight()
    const [ width ] = useWidth()

  return <GeneralContext.Provider value={{ height,  width, propertyInfo, setPropertyInfo }}>

            {children}

        </GeneralContext.Provider>
};

export const useGeneralContext = () => useContext(GeneralContext)
