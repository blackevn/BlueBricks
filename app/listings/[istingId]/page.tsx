"use client"

import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import ListingClient from "./ListingClient";
import useListing from "@/app/hooks/useListing";
interface IParams {
  params?: string
}

const ListingPage = async () => {

const listings = await getListings()

    // const pathname = usePathname();
    // const listingId = pathname?.toString().replace(/^\/listings\//, "");
  
   return (
    <>
    <div>
         <ListingClient listings={listings} />
    </div>
    </>
  );
}

 
export default ListingPage;