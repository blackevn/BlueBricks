'use client'

import { useParams, usePathname } from "next/navigation";

export let params: any = []

if ( params ) {
    setTimeout(() => {
        params = []
    }, 1000)
}

const ListingClient = () => {

 const listingParams = usePathname()

 params.push(listingParams)
    

    return <div>ListingClient</div>;
};

export default ListingClient;
