'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useGeneralContext } from "../context/AppContext"
import { InputProps } from "@/types/interfaces"
import { faIcons } from "@fortawesome/free-solid-svg-icons"

const Input: React.FC<InputProps> = (props) => {

  const { height } = useGeneralContext()

    const {type, 
           name, 
           value, 
           id, 
           onChange, 
           placeholder = "Input", 
           textColor =  "text-gray-600", 
           modifier, 
           ref, 
           disabled, 
           hidden, 
           onFocus,
           icon = faIcons} = props

  return (

    <>

		<input
    
    disabled={disabled}

      ref={ref}
      className={`
       outline-0
       border-0
       p-1.5
       px-2
       ${textColor}
       ${modifier}
       ${ height > 800 ? "md:input-md" : "input-sm"}

       `}

        type={type}
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        hidden={hidden}
        />

      
      
    </>

  )
}


export default Input;
