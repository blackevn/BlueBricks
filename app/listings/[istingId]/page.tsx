import { getListingById } from "@/app/actions";
import { useRouter } from "next/router";
import React from "react";

interface IParams {
  listingId?: string
}

const router = useRouter()

console.log(router.pathname)

const ListingPage = async ({params}: {params: IParams}) => {
  const listing = await getListingById(params)
  return <>
          <div>{listing?.title}</div>
        </>
};

export default ListingPage;
