'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export let params: any = []

console.log(params);

const ListingClient = () => {
    
    const listingParams = usePathname()
    
    useEffect(() => {

        params.push(listingParams)

        if ( params ) {
            setTimeout(() => {
                params = []
            }, 5000)
        }
       
    }, [params])
  

    return <div>{JSON.stringify(params)}</div>;
};

export default ListingClient;
