'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

let params: any = []

export const updatedParams = params?.map((param: any) => param?.replace(/\/listings\//, '/listings/'));

console.log(updatedParams);

const ListingClient = () => {
    
    const listingParams = usePathname()
    
    params.push(listingParams)
    useEffect(() => {
        if ( params ) {
            setTimeout(() => {
                params = []
            }, 1000)
        }
       
    }, [params])
  

    return <div>ListingClient</div>;
};

export default ListingClient;
