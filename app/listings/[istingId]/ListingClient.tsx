'use client'

import { useParams, usePathname } from "next/navigation";
import { useEffect } from "react";

let params: any = []

export const updatedParams = params?.filter((param: any) => param?.replace(/\/listings\//, '/listings/'));

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
