'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export let params: any = []

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
