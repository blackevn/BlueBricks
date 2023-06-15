
import {useContext, createContext } from "react";
import { IProps, ContextData } from "@/types/interfaces";
import { useToggle, useHeight, useWidth, useAddProperty } from "../hooks";


const GeneralContext = createContext<ContextData>({   

   height: 0,
   width: 0

}) 

export const GeneralAppContext = ({ children }: IProps) => {

    const { propertyInfo, setPropertyInfo } = useAddProperty()
    const [ height ] = useHeight()
    const [ width ] = useWidth()

  return <GeneralContext.Provider value={{ height,  width, propertyInfo, setPropertyInfo }}>

            {children}

        </GeneralContext.Provider>
};

export const useGeneralContext = () => useContext(GeneralContext)
