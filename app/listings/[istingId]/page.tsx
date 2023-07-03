
import { getCurrentUser, getListingById, getReservations } from "@/app/actions";
import { GetServerSideProps } from "next";


interface IParams {
  listingId?: string
}

const ListingPage = async ({ params }: {params: IParams}) => {

const listingId = await getListingById(params)
  
console.log(params);


  return (
    <></>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  return {
    props: {
      params: params || ''
    }
  };
};

 
export default ListingPage;