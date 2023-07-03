
import { getCurrentUser, getListingById, getReservations } from "@/app/actions";


interface IParams {
  listingId?: string
}

const ListingPage = async ({ params }: {params: IParams}) => {

const listingId = await getListingById(params)
  

  return (
    <></>
  );
}
 
export default ListingPage;