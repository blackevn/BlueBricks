"use client"

import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient, { params } from "./ListingClient";
import { usePathname } from "next/navigation";
import useListing from "@/app/hooks/useListing";

interface IParams {
  params?: string
}

const ListingPage = () => {
  
  const listingParams = usePathname();

  const pathname = usePathname();
  const listingId = pathname?.toString().replace(/^\/listings\//, "");
  const { data: data } = useListing(listingId as string)
  console.log(data);
  console.log(listingId);
  
  
  
  return (
    <>
    <div>
    {JSON.stringify(params)}
      <ListingClient />
    </div>
    </>
  );
}

 
export default ListingPage;