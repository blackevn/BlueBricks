'use client'

import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient, { params } from "./ListingClient";

interface IParams {
  params?: string
}

const ListingPage = async () => {

console.log(params);

 if ( params ) {
  
   const currentUser = await getCurrentUser()
   console.log(currentUser);
   
    }
  
  
  // const listings = await getListingById(updatedParams)
  
  return (
    <>
    <div>
      <ListingClient />
    </div>
    </>
  );
}

 
export default ListingPage;