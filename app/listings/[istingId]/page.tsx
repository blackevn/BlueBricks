'use client'

import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient, { params } from "./ListingClient";

interface IParams {
  params?: string
}

const ListingPage = async () => {

console.log(params.toString());


  
  // const listings = await getListingById(updatedParams)
  // const currentUser = await getCurrentUser()
  return (
    <>
    <div>
      <ListingClient />
    </div>
    </>
  );
}

 
export default ListingPage;