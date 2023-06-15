'use client'

import React from "react";
import { BsHouseAdd } from "react-icons/bs";

type Props = {
  label: string
}

type AddPropertyProps = {

}

const Heading: React.FC<Props> = ({ label }) => {
  return <h1 className="flex items-center gap-2 text-xl font-bold"><BsHouseAdd/><span>{label}</span></h1>
}

const AddProperty: React.FC<AddPropertyProps> = () => {
  
    let bodyContent = ( 
                        <div>
                        <Heading label='Add your property'/>
                        </div>
                      )


  return <div className="p-4 lg:p-8">
            {bodyContent}
        </div>
};

export default AddProperty;
