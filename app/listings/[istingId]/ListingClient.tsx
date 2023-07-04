'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

let params: string[] = [];

export const updatedParams: string[] = params.map((param: string) => {
  const matchResult = param.match(/\/listings\/(.+)/)?.[1];
  return matchResult || ""; // return an empty string if no match is found
});

const ListingClient = () => {
    
    const listingParams = usePathname()
    
    if (listingParams !== null) {
        params.push(listingParams);
      }
    useEffect(() => {
        if ( params ) {
            setTimeout(() => {
                params = []
            }, 2000)
        }
       
    }, [params])
  

    return <div>ListingClient</div>;
};

export default ListingClient;
