import { Listing } from "@/types/interfaces";
import { useState } from "react";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}


const useAddProperty = () => {

    const initialListingInfo: Listing = {
      category: '',
      location: undefined,
      guestCount: 1,
      roomCount: 1  ,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }
    



    const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)
    const [ step, setStep ] = useState(STEPS.CATEGORY);

    const handleAddProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, name, checked} = e.target
      const newValue = type === "checkbox" ? checked : value;
      setPropertyInfo((prevData) => ({
      ...prevData,
      [name]: newValue,
      }))
  }

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
   
  return {propertyInfo, setPropertyInfo, handleAddProperty, onBack,
          onNext, STEPS, step}
};

export default useAddProperty;
