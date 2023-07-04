'use client'

import { useParams, usePathname } from "next/navigation";

export const params: any = []

const ListingClient = () => {

 const listingParams = usePathname()

 params.push(listingParams)
    

    return <div>ListingClient</div>;
};

export default ListingClient;
