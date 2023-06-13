'use client'

import { useState } from "react";
import useToggle from "./useToggle";
import { Toast } from "../components";
import { toast } from "react-hot-toast";
import { faAt, faEllipsisH, faHand } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";


type AuthData = {
    name: string
    email: string
    password: string 
    rememberMe?: boolean  
    errors?: Record<string, string | null>; 
}

const initialAuthData: AuthData = {
    name: '',
    email: '',
    password: '',
    rememberMe: false,
    errors: {}
}

const useAuthForm = () => {
 
    const router = useRouter()
    const [ isSignup, switchSignup, setSignup] = useToggle(false)
    const [ showPassword, handleShowPassword ] = useToggle(false)
    const [ errorValue, handleErrorValue, setErrorValue ] = useToggle(false)
    const [ authData, setAuthData ] = useState<AuthData>(initialAuthData)
    
    const handleAuthValues = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, type, name, checked} = e.target
        const newValue = type === "checkbox" ? checked : value;
        setAuthData((prevData) => ({
        ...prevData,
        [name]: newValue,
        }))
    }

 const handleValidation = () => {
    const errors: Record<string, string | null> = {};

  if (!authData.email) {
    errors.email = 'Email is required.';
    toast.custom((t: any) => (<Toast
                              modifier={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-orange-500`}
                              icon={faAt}
                              text="Email is required."
                              />))
  } else if (!/\S+@\S+\.\S+/.test(authData.email)) {
    errors.email = 'Email is invalid.';
  } else {
    errors.email = null; 
  }

  if (!authData.password) {
    errors.password = 'Password is required.';
    toast.custom((t: any) => (<Toast
      modifier={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-orange-500`}
      icon={faEllipsisH}
      text="Password is required."
      />))
  } else {
    errors.password = null; 
  }

  setAuthData((prevState) => ({
    ...prevState,
    errors,
  }));

  return Object.keys(errors).length === 0;

      };

    const sendAuthData = () => {
        console.log(authData);
        
        handleValidation()
        setAuthData(initialAuthData)
        
        if ( isSignup ) {

          axios.post('/api/register', authData)
          .catch( error => console.log(error))
          toast.custom(() => (<Toast
                              text="Welcome"
                              modifier="bg-blue-600"
                              icon={faHand}
          />))
           
        } else {

          signIn('credentials', { 
            ...authData, 
            redirect: true,
          })

          toast.custom(() => (<Toast
            text="Welcome"
            modifier="bg-blue-600"
            icon={faHand}

          />))
         
          
        }
        
        router.refresh()

    }
    
  return {
          handleAuthValues, authData, isSignup, 
          switchSignup, setSignup, showPassword, 
          handleShowPassword, sendAuthData
          
        }

};

export default useAuthForm;
