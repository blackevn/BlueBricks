'use client'

import { Avatar } from "@/types/interfaces";

const Avatar:  React.FC<Avatar> = ({ src = '/vercel.svg', width = 'w-10'}) => {

  return <div className={`avatar ${width}`}>
            <div className={`w-full mask`}> 
               <img className="bg-white w-14 h-14 rounded-full" src={src} alt="thumbnail"/>
            </div>
        </div>
};

export default Avatar;
