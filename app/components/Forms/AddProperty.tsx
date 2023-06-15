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
}

type AddPropertyProps = {

}

const Heading: React.FC<Props> = ({ label }) => {
  return <h1 className="flex items-center gap-2 text-xl font-bold"><BsHouseAdd/><span>{label}</span></h1>
}

const AddProperty: React.FC<AddPropertyProps> = () => {

  const [step, setStep] = useState(STEPS.CATEGORY);

  const onBack = () => {
    if( step === STEPS.CATEGORY){
      setStep(STEPS.CATEGORY)
    } else {
      setStep((value) => value - 1);
    }
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  console.log(step);
  
  
    let bodyContent = ( 
                        <div>
                        <Heading label='Add your property'/>
                        <div>
                          <Input
                          name="name"
                          value="value"
                          placeholder=""
                          type=""
                          icon={BsHouseAdd}/>
                        </div>
                        </div>
                      )

  if (step === STEPS.DESCRIPTION){
    bodyContent = (
                    <div>
                      <Heading label="Add your property > Description"/>
                    </div>
    )
  }


  return <div className="p-4 lg:p-8">
            {bodyContent}
            <div className="flex w-full items-center justify-between">
              <Button clickEvent={onBack} text="Back" modifier="btn" icon={IoChevronBackCircleSharp}/>
              <Button clickEvent={onNext} text="Next" modifier="btn flex-row-reverse" icon={IoChevronForwardCircleSharp}/>
            </div>
        </div>
};

export default AddProperty;
