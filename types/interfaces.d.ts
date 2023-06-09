import { Toggle } from '@/app/components';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { type } from 'os';
import { FormEventHandler, ReactNode } from 'react';

type FunctionHandler = () => void;

type ToggleHandler = boolean | FunctionHandler

type ClickEvent =  MouseEventHandler<HTMLButtonElement> | string | (() => void)


export interface IProps {

    children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[]
      
  }

export interface Avatar{
    image?: any
    src?: any
    children?: IProps
    modifier?: string
    userId?: string
    width?: string
  }
export interface ToastProps {

  modifier?: string
  children?: JSX.Element
  text?: string
  icon?: IconDefinition
  clickEvent?: ClickEvent
  mode?: boolean
  
}


export type FormAuthData = {

  userName: string,
  name: string
  email: string,
  password: string,
  rememberMe: boolean
  
}

export type InputProps = {
  type: string
  name: string 
  value: string
  id?: string
  onChange?: FormEventHandler
  onFocus?: FormEventHandler
  placeholder: string 
  textColor?: string
  modifier?: string
  ref?: string
  disabled?: boolean
  hidden?: boolean
  icon?: IconDefinition
}


export type ButtonProps = {

  text?: string 
  textColor?: string 
  bgColor?: string
  clickEvent?:  ClickEvent
  borderColor?: string 
  icon?: IconDefinition
  borderSize?: string 
  paddingX?: string
  paddingY?: string
  children?: JSX.Element
  modifier?: string
  tip?: string
  isActive?: boolean
  disabled?: boolean

}
  
export interface ContextData {

  width: number
  height: number
  user?: IUser
  toggle?: ToggleHandler
  showPassword?: ToggleHandler
  handleToggle?: ClickEvent
  darkMode?: ToggleHandler
  toggleDarkMode?: ClickEvent
  
}

  export interface NavigationLinks {

    id: number
    name: string
    href?: string
    icon: IconDefinition
    notification?: number
    isAuthenticated?: boolean
    hasNotification?: boolean
  }

  export type Categories = {

    id: number
    name: string
    icon: IconDefinition
    link?: string

  }

  
  export interface IUser {
    id?: string;
    name?: string | null | SetStateAction<string>
    userName?: string | SetStateAction<string>
    image?: string;
    bio?: string | SetStateAction<string>
    email: string;
    verifiedEmail: string
    image: string
    coverImage: string | SetStateAction<string>
    profileImage: string | SetStateAction<string>
    hashedPassword: string;
    createAt: string;
    updatedAt: string;
    followingId: string;
    hasNotification: boolean
    bg?: string
    filter?: any
    length?: any
    map?: any
  }

