
import { getCurrentUser, getListingById, getListings, getReservations } from "@/app/actions";
import { NextPage } from "next";
import ListingClient, { params } from "./ListingClient";

interface IParams {
  params?: string
}

const ListingPage = async () => {
  
  // const listingParams = usePathname();

  // const pathname = usePathname();
  // const listingId = pathname?.toString().replace(/^\/listings\//, "");
  // console.log(data);
  
  
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