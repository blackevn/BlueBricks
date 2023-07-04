import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient, { updatedParams } from "./ListingClient";

interface IParams {
  params?: string
}

const ListingPage = async () => {

console.log(updatedParams);


  
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