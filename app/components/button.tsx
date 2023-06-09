'use client'

import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGeneralContext } from "../context/AppContext"
import { ButtonProps } from "@/types/interfaces";

const Button: React.FC<ButtonProps> = (props) => {

  
  const { height } = useGeneralContext()

 

    const {

           text = "Button", 
           textColor, 
           bgColor, 
           clickEvent, 
           borderColor, 
           icon = faIcons, 
           children,
           modifier,
           tip,
           isActive,
           disabled
           
          
          } = props

  return (
    <>
    
    <button type="button" disabled={disabled} onClick={clickEvent}
    
    className={`
        p-4
        flex
        items-center
        justify-center
        gap-2
        rounded-full
        btn-sm
        text-[12px]
        lg: text-md
        ${ height > 800 ? "md:btn-md" : "btn-sm"}
        
        ${isActive}
        ${modifier}
        ${borderColor} 
        ${textColor}
        ${bgColor}
     
 
    `}

     data-tip={tip}
    
   ><FontAwesomeIcon icon={icon}/>
          
            {text}
            {children}
        
        </button>

    </>
  )
}


export default Button;
