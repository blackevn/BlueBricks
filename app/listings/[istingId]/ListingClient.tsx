'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

export let params: any = []

console.log(params[0]?.toString());


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
