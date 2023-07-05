'use client'

import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export let params: any[] = [];

const ListingClient = () => {
  const listingParams = usePathname();

  const clearArr = useMemo(() => {
    if(params.length > 0 )
      params.shift()
  }, [params])
  params.push(listingParams);

  

  // useEffect(() => {

  //   if (params.length > 0) {
  //     setTimeout(() => {
  //       params.length = 0;
  //     }, 5000);
  //   }
  // }, [listingParams]);

  return <div>{JSON.stringify(params)}</div>;
};

export default ListingClient;
