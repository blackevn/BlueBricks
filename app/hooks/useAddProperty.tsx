import { Listing } from "@/types/interfaces";
import { useState } from "react";

const useAddProperty = () => {

    const initialListingInfo: Listing = {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }

    const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)
   
  return {propertyInfo, setPropertyInfo}
};

export default useAddProperty;
