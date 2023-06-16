'use client'

import React, { useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import Button from "../button";
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";
import Input from "../input";
import { useAddProperty, useLinks } from "@/app/hooks";
import { useGeneralContext } from "@/app/context/AppContext";
import CategoryItem from "./categoryItem";
import { Listing } from "@prisma/client";
import CountrySelect, { CountrySelectValue } from "./countrySelect";

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
  return <div className="space-y-4">
          <h1 className="flex items-center gap-2 text-xl font-bold"><BsHouseAdd/><span>{label}</span></h1>
          <h1 className="text-lg font-bold">{title}</h1>
        </div> 
  
}

const AddProperty: React.FC<AddPropertyProps> = () => {

  const { categories } = useLinks()
  const { propertyInfo, setPropertyInfo, handleAddProperty } = useAddProperty()
  const [step, setStep] = useState(STEPS.CATEGORY);


  console.log(propertyInfo);
  
  const onBack = () => {
    if( step === STEPS.CATEGORY){
      setStep(0)
    } else {
      setStep((prevValue) => prevValue - 1);
    }
  }

  const onNext = () => {
    if( step === STEPS.PRICE){
      setStep(5)
    } else {
    setStep((prevValue) => prevValue + 1);
  }
  }
  
  console.log(step);
  
  
    let bodyContent = ( 
                        <div className="space-y-4">
                        <Heading 
                        label='Add your property'
                        title="Select Category"/>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        { categories.map(item => (
                          <CategoryItem
                           selected={propertyInfo.category === item.name}
                           icon={item.icon}
                           name={item.name}
                           key={item.id}
                           propertyInfo={propertyInfo}
                           setPropertyInfo={setPropertyInfo}
                          />
                        ))}
                        </div>
                        </div>
                      )

  if (step === STEPS.LOCATION){
    bodyContent = (
                    <div>
                      <Heading 
                      title="Location"
                      label="Add your property"/>
                      <CountrySelect value={propertyInfo?.location}  onChange={function (value: CountrySelectValue): void {
                      throw new Error("Function not implemented.");
        } }/>
                    </div>
    )
  }


  if (step === STEPS.INFO){
    bodyContent = (
                    <div>
                      <Heading 
                      title="Information"
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
  if (step === STEPS.DESCRIPTION){
    bodyContent = (
                    <div>
                      <Heading 
                      title="Description"
                      label="Add your property"/>
                    </div>
    )
  }
  if (step === STEPS.PRICE){
    bodyContent = (
                    <div>
                      <Heading 
                      title="Price"
                      label="Add your property"/>
                    </div>
    )
  }


  return <div className="p-4 lg:p-6 space-y-4 min-w-[70%] min-h-[60%]">
            <div className="p-4">

              {bodyContent}

            </div>
            <div className={`flex w-full items-center  ${step === 0 ? 'justify-end' : 'justify-between'}`}>
             {step !== 0 && <Button clickEvent={onBack} text="Back" modifier="btn" icon={IoChevronBackCircleSharp}/>}
              <Button clickEvent={onNext} text="Next" modifier="btn flex-row-reverse" icon={IoChevronForwardCircleSharp}/>
            </div>
        </div>
};

export default AddProperty;
