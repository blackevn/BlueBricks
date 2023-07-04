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
            }, 1000)
        }
       
    }, [params])
  

    return <div>ListingID</div>;
};

export default ListingClient;
