'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";



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

export let params: any = []
console.log(params);
export default ListingClient;
