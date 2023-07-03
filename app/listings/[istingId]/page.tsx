'use client'

import { getCurrentUser, getListingById, getReservations } from "@/app/actions";
import { listingById } from "@/app/actions/getListingById";
import { Listing } from "@prisma/client";
import axios from "axios";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";


interface IParams {
  listingId?: string
}


const ListingPage = ({ params }: { params: IParams }) => {
const path = usePathname()
const listingId = path?.split("/")[2];
let oneListing = null

useEffect(() => {
  const listings = fetch('/api/listings', listingId as any)

  oneListing = listings

}, [listingId, oneListing])


console.log(oneListing);


  // const listing = await getListingById(params);
  // const reservations = await getReservations(params);
  // const currentUser = await getCurrentUser();

  return (
    <>
    <div>
      Listing
    </div>
    </>
  );
}

 
export default ListingPage;