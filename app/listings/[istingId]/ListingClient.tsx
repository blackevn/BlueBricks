'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export let params: any[] = [];

const ListingClient = () => {
  const listingParams = usePathname();

  useEffect(() => {
    params.push(listingParams);

    if (params.length > 0) {
      setTimeout(() => {
        params.length = 0;
      }, 5000);
    }
  }, [params]);

  return <div>ID</div>;
};

export default ListingClient;
