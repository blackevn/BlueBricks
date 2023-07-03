import { getCurrentUser, getListingById, getReservations } from "@/app/actions";

interface IParams {
  listingId?: string
}

const ListingPage = ({ params }: { params: IParams }) => {
console.log(params);

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