'use client'

import React, { useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import Button from "../button";
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

type Props = {
  label: string
}

type AddPropertyProps = {

}

const Heading: React.FC<Props> = ({ label }) => {
  return <h1 className="flex items-center gap-2 text-xl font-bold"><BsHouseAdd/><span>{label}</span></h1>
}

const AddProperty: React.FC<AddPropertyProps> = () => {

  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  console.log(step);
  
  
    let bodyContent = ( 
                        <div>
                        <Heading label='Add your property'/>
                        </div>
                      )

  


  return <div className="p-4 lg:p-8">
            {bodyContent}
            <div className="flex w-full items-center justify-between">
              <Button modifier="btn" icon={IoChevronBackCircleSharp}/>
              <Button modifier="btn" icon={IoChevronForwardCircleSharp}/>
            </div>
        </div>
};

export default AddProperty;
