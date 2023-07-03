import { getListingById } from "@/app/actions";

interface IParams {
  listingId?: string
}

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingById(params)
  return <>
          <div>{listing?.title}</div>
        </>
};

export default ListingPage;
