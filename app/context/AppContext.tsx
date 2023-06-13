
import {useContext, createContext } from "react";
import { IProps, ContextData } from "@/types/interfaces";
import { useToggle, useHeight, useWidth } from "../hooks";
import { getCurrentUser } from "../actions";


const GeneralContext = createContext<ContextData>({   

   height: 0,
   width: 0

}) 

export const GeneralAppContext = ({ children }: IProps) => {

    const [ height ] = useHeight()
    const [ width ] = useWidth()

  return <GeneralContext.Provider value={{ height,  width }}>

            {children}

        </GeneralContext.Provider>
};

export const useGeneralContext = () => useContext(GeneralContext)
