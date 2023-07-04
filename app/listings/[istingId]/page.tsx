import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient, { params } from "./ListingClient";

interface IParams {
  params: string
}

const ListingPage = async () => {

  console.log(params);
  

  const listings = await getListings()
  const currentUser = await getCurrentUser()
  return (
    <>
    <div>
      <ListingClient />
    </div>
    </>
  );
}

 
export default ListingPage;