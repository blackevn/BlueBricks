'use client'

import { getCurrentUser, getListingById, getReservations } from "@/app/actions";
import { listingById } from "@/app/actions/getListingById";
import { useRouter, usePathname } from "next/navigation";


interface IParams {
  listingId?: string
}


const ListingPage = ({ params }: { params: IParams }) => {


const path = usePathname()
// const list =  listingById(params)

console.log(path);


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