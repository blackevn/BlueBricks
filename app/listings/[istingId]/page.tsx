"use client"

import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient from "./ListingClient";
import { usePathname } from "next/navigation";
import useListing from "@/app/hooks/useListing";
import { useEffect, useState } from "react";
import axios from "axios";

interface IParams {
  params?: string
}

const ListingPage = () => {
   
   const [ allListings, setAllListings] = useState([])
    const pathname = usePathname();
    const listingId = pathname?.toString().replace(/^\/listings\//, "");

  useEffect(() => {
    axios.get(`/api/listings/${listingId}`)
    .then(res => setAllListings(res.data))
    .catch(error => console.log(error)
    )
  }, [listingId])
  
  const listingParams = usePathname();
  const { data: data } = useListing(listingId as string)
  console.log(data);
  console.log(allListings);
  
  
  
  return (
    <>
    <div>
         <ListingClient />
    </div>
    </>
  );
}

 
export default ListingPage;