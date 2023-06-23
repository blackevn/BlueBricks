import {useContext, createContext, useState } from "react";
import { IProps, ContextData, Listing } from "@/types/interfaces";
import { useToggle, useHeight, useWidth, useAddProperty, useAllData} from "../hooks";

const GeneralContext = createContext<ContextData>({   

   height: 0,
   width: 0

}) 

export const GeneralAppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const [ width ] = useWidth()
    const listings = useAllData()
    const [ addModalToggle, setAddModalToggle ] = useToggle(false)


  return <GeneralContext.Provider value={{ listings, height,  width, addModalToggle, setAddModalToggle }}>

            {children}

        </GeneralContext.Provider>
}

export const useGeneralContext = () => useContext(GeneralContext)
