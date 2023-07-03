'use client'
import { getCurrentUser, getListingById, getReservations } from "@/app/actions";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";



interface IParams {
  listingId: string
}



const ListingPage = ({ params }: {params: IParams}) => {

  const pathname = usePathname()

  const id = pathname

  let oneListing = null

  useEffect(() => {
    const getListings = async () => {
   
    const listingId = await getListingById(params)

    oneListing = listingId
    }
  }, [oneListing])


  
console.log(oneListing);
console.log(id);


  return (
    <></>
  );
}

 
export default ListingPage;