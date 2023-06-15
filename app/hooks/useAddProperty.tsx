import { Listing } from "@/types/interfaces";
import { useState } from "react";

const useAddProperty = () => {

    const initialListingInfo: Listing = {
          category: ''
    }

    const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)
   
  return {propertyInfo, setPropertyInfo}
};

export default useAddProperty;
