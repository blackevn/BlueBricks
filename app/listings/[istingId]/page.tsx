import { getCurrentUser, getListingById, getReservations } from "@/app/actions";


interface IParams {
  listingId?: string
}


const ListingPage = async ({ params }: { params: IParams }) => {

  // const listing = await getListingById(params);
  // const reservations = await getReservations(params);
  // const currentUser = await getCurrentUser();

  console.log(params);
  


  return (
    <>
    <div>
      Listing
    </div>
    </>
  );
}

 
export default ListingPage;