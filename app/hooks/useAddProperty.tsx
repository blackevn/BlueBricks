import { Listing } from "@/types/interfaces";
import { useState } from "react";

const useAddProperty = () => {

    const initialListingInfo: Listing = {
      category: '',
      location: undefined,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }

    const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)

    const handleAddProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, name, checked} = e.target
      const newValue = type === "checkbox" ? checked : value;
      setPropertyInfo((prevData) => ({
      ...prevData,
      [name]: newValue,
      }))
  }
   
  return {propertyInfo, setPropertyInfo, handleAddProperty}
};

export default useAddProperty;
