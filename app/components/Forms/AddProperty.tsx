'use client'

import React, { useMemo, useState } from "react";
import { BsHouseAdd } from "react-icons/bs";
import Button from "../button";
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from "react-icons/io5";
import Input from "../input";
import { useAddProperty, useLinks } from "@/app/hooks";
import { useGeneralContext } from "@/app/context/AppContext";
import CategoryItem from "./categoryItem";
import { Listing } from "@prisma/client";
import CountrySelect, { CountrySelectValue } from "./countrySelect";
import dynamic from "next/dynamic";
import Counter from "../Counter";
import ImageUpload from "./imageUpload";
import Loading from "../Loading/loading";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

type Props = {
  label?: string
  title?: string 
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
  const [mapLoaded, setMapLoaded] = useState(false);
  const { propertyInfo, setPropertyInfo, handleAddProperty } = useAddProperty()
  const [ step, setStep ] = useState(STEPS.CATEGORY);


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
  
    let heading = (
      <Heading 
      label='Add your property'
      title="Select Category"/>
    )
    
    let bodyContent = ( 
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

    const Map = useMemo(() => {
      const loadMap = async () => {
        const { default: LoadedMap } = await import('../Map');
        setMapLoaded(true);
        return LoadedMap;
      };
      return dynamic(() => loadMap(), { ssr: false });
    }, [propertyInfo.location]);

  if (step === STEPS.LOCATION){
    heading = (
      <Heading 
      title="Location"
      label="Add your property"/>
    )
    bodyContent = (
                  <div>

                  {mapLoaded ? <div className="place-items-center grid gap-4 relative h-[40vh]">
                         <div className="z-[99] w-full absolute top-0 grid place-items-center">
                         <CountrySelect 
                         value={propertyInfo.location} 
                         onChange={(value: any) => setPropertyInfo({...propertyInfo, location: value})} 
                         />
                         </div>
                         <Map center={propertyInfo.location?.latlng}/>
                       </div> : <Loading/> }
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
              <Button clickEvent={onNext} text="Next" modifier="btn flex-row-reverse" icon={IoChevronForwardCircleSharp}/>
            </div>
        </div>
};

export default AddProperty;
