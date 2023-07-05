"use client"

import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import ListingClient from "./ListingClient";
import { usePathname } from "next/navigation";
import useListing from "@/app/hooks/useListing";
import { useEffect, useState } from "react";
interface IParams {
  params?: string
}

const ListingPage = () => {

    const pathname = usePathname();
    const listingId = pathname?.toString().replace(/^\/listings\//, "");
  
  const { data: data } = useListing(listingId as string)
  console.log(data);

  return (
    <>
    <div>
         <ListingClient />
    </div>
    </>
  );
}

 
export default ListingPage;