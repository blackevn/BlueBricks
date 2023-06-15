'use client'

import React, { useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import Button from "../button";
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";
import Input from "../input";

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
  title: string 
}

type AddPropertyProps = {

}

const Heading: React.FC<Props> = ({ label, title }) => {
  return <div className="space-x-2">
          <h1 className="flex items-center gap-2 text-xl font-bold"><BsHouseAdd/><span>{label}</span></h1>
          <h1 className="text-lg font-bold">{title}</h1>
        </div> 
  
}

const AddProperty: React.FC<AddPropertyProps> = () => {

  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    if( step === STEPS.CATEGORY){
      setStep(STEPS.CATEGORY)
    } else {
      setStep((prevValue) => prevValue - 1);
    }
  }

  const onNext = () => {
    if( step === STEPS.PRICE){
      setStep(STEPS.PRICE)
    } else {
    setStep((prevValue) => prevValue + 1);
  }
  }
  
  console.log(step);
  
  
    let bodyContent = ( 
                        <div>
                        <Heading 
                        label='Add your property'
                        title="Category"/>
                        <div>
                          <Input
                          name="name"
                          value="value"
                          placeholder=""
                          type=""
                          icon={BsHouseAdd}
                          modifier="input"/>
                        </div>
                        </div>
                      )

  if (step === STEPS.DESCRIPTION){
    bodyContent = (
                    <div>
                      <Heading 
                      title="Description"
                      label="Add your property"/>
                    </div>
    )
  }

  if (step === STEPS.IMAGES){
    bodyContent = (
                    <div>
                      <Heading 
                      title="Images"
                      label="Add your property"/>
                    </div>
    )
  }


  return <div className="p-4 lg:p-6 min-w-[300px] lg:min-w-[500px]">
            {bodyContent}
            <div className="flex w-full items-center justify-between">
              <Button clickEvent={onBack} text="Back" modifier="btn" icon={IoChevronBackCircleSharp}/>
              <Button clickEvent={onNext} text="Next" modifier="btn flex-row-reverse" icon={IoChevronForwardCircleSharp}/>
            </div>
        </div>
};

export default AddProperty;
