'use client'

import React from "react";
import Avatar from "./avatar";
import { IProps, IUser } from "@/types/interfaces";

interface UserDropdownProps {
  children: JSX.Element[] | JSX.Element
  currentUser?: IUser;
  modifier?: string
}

const UserDropdown: React.FC<UserDropdownProps> = ({currentUser, children, modifier}) => {

  return <>
            <div className="dropdown">
            <label className="mb-4" tabIndex={0}> 
            <Avatar 
            width="m-1 w-8 h-8 lg:w-10 lg:h-10" 
            src={currentUser?.image}/> 
            </label>
            <div 
            className={`dropdown-menu dropdown-menu-bottom-left my-2 
            ${modifier}`}>
             {children}
            </div>
            </div>
        </> 
           
};

export default UserDropdown;
