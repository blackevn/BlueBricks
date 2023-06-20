'use client'

import React, { useEffect, useMemo, useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import Button from "../button";
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";
import Input from "./input";
import { useAddProperty, useLinks, useToggle } from "@/app/hooks";
import { useGeneralContext } from "@/app/context/AppContext";
import CategoryItem from "./categoryItem";
import { Listing } from "@prisma/client";
import CountrySelect, { CountrySelectValue } from "./countrySelect";
import dynamic from "next/dynamic";
import Counter from "../Counter";
import ImageUpload from "./imageUpload";
import Loading from "../Loading/loading";
import { MdTitle } from "react-icons/md";
import { LuSubtitles } from "react-icons/lu";
import { AiFillCheckCircle } from "react-icons/ai";
import { ClickEvent } from "@/types/interfaces";

type Props = {
  label?: string
  title?: string 
}

type AddPropertyProps = {

  handleToggleModal: ClickEvent
  toggleModal: boolean
}

const Heading: React.FC<Props> = ({ label, title }) => {

  return <div className="space-y-4">
          <h1 className="flex items-center gap-2 text-xl font-bold"><BsHouseAdd/><span>{label}</span></h1>
          <h1 className="text-lg font-bold">{title}</h1>
        </div> 
  
}

const AddProperty: React.FC<AddPropertyProps> = () => {

  const { categories } = useLinks()
  const { propertyInfo, setPropertyInfo, handleAddProperty, onBack,
          onNext, STEPS, step, addOrNext } = useAddProperty()
 
 
  console.log(propertyInfo);
  console.log(step);
  
    let heading = <></>
    let bodyContent = <></>

    if (step === STEPS.CATEGORY){

      heading = (
        <Heading 
        label='Add your property'
        title="Select Category"/>
      )

      bodyContent = ( 
                          <div className="space-y-4">
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

    }
    

    const Map = useMemo(() => dynamic(() => import('../Map'), { 
      ssr: false 
    }), [propertyInfo.location, step]);


  if (step === STEPS.LOCATION){
     
    heading = (
      <Heading 
      title="Location"
      label="Add your property"/>
    )
    bodyContent = (
          
                <div className="place-items-center grid gap-4 relative h-[40vh]">
                    <div className="z-[99] w-full absolute top-0 grid place-items-center">
                    <CountrySelect 
                    value={propertyInfo.location} 
                    onChange={(value: any) => setPropertyInfo({...propertyInfo, location: value})} 
                    />
                    </div>
                    <Map center={propertyInfo.location?.latlng}/>
                  </div>
               
                    
    )
  }


  if (step === STEPS.INFO){
    heading = (
      <Heading 
      title="Information"
      label="Add your property"/>
    )
    bodyContent = (
                    <div className="space-y-4">
                      <Counter
                      title="Guests"
                      subtitle="How many guests allowed at a time"
                      onChange={(value: any) => setPropertyInfo({...propertyInfo, roomCount: value})}
                      value={propertyInfo.roomCount}
                      />
                      <hr className="border-gray-2 bg-gray-2"/>
                      <Counter
                      title="Bathrooms"
                      subtitle="How many bathrooms does your property have?"
                      onChange={(value: any) => setPropertyInfo({...propertyInfo, bathroomCount: value})}
                      value={propertyInfo.bathroomCount}
                      />
                      <hr className="border-gray-2"/>
                      <Counter
                      title="Rooms"
                      subtitle="How many rooms does your property have?"
                      onChange={(value: any) => setPropertyInfo({...propertyInfo, guestCount: value})}
                      value={propertyInfo.guestCount}
                      />
                    </div>
    )
  }

  if (step === STEPS.IMAGES){
    heading = (
      <Heading 
      title="Images"
      label="Add your property"/>
    )
    bodyContent = (
                    <div className="space-y-4">
                      <ImageUpload
                      onChange={(value: any) => setPropertyInfo({...propertyInfo, imageSrc: value})}
                      value={propertyInfo.imageSrc}
                      />
                    </div>
    )
  }
  if (step === STEPS.DESCRIPTION){
    heading = (
      <Heading 
      title="Description"
      label="Add your property"/>

    )
    bodyContent = (
                    <div className="space-y-4">
                      <Input
                      type="text"
                      onChange={handleAddProperty}
                      value={propertyInfo.title}
                      placeholder="Title"
                      icon={MdTitle}
                      name="title"
                      modifier="input authInput w-[60vw] lg:w-[45vw]"

                      />
                      <Input
                      type="text"
                      onChange={handleAddProperty}
                      value={propertyInfo.description}
                      placeholder="Description"
                      icon={LuSubtitles}
                      name="description"
                      modifier="input authInput w-[60vw] lg:w-[45vw]"
                      />
                    </div>
    )
  }
  if (step === STEPS.PRICE){
    heading = ( 
      <Heading 
      title="Price"
      label="Add your property"/>

    )
    bodyContent = (
                      <div className="space-y-4">

                      <div className="flex items-center">
                      <h1 className="font-bold">$</h1>
                      <Input
                      type="number"
                      onChange={handleAddProperty}
                      value={propertyInfo.price}
                      placeholder="Price"
                      icon={LuSubtitles}
                      name="price"
                      modifier="input authInput w-[60vw] lg:w-[45vw]"
                      iconModifier="hidden"
                      />
                      </div>
                    </div>
    )
  }


  return <div className="p-4 lg:p-6 space-y-4 flex flex-col justify-between w-[80vw] lg:w-[65vw] lg:min-h-[45vh] ">

          {heading}
    
            <div className="p-4 lg:min-w-[55vw] grid place-items-center ">

              {bodyContent}

            </div>
            <div className={`flex w-full items-center  ${step === 0 ? 'justify-end' : 'justify-between'}`}>
             {step !== 0 && <Button clickEvent={onBack} text="Back" modifier="btn" icon={IoChevronBackCircleSharp}/>}
              <Button 
              clickEvent={addOrNext} 
              text={step === STEPS.PRICE ? 'Finish' : 'Next'} 
              modifier="btn flex-row-reverse" 
              icon={step === STEPS.PRICE ? AiFillCheckCircle : IoChevronForwardCircleSharp}/>
            </div>
        </div>
};

export default AddProperty;
