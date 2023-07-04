import { usePathname } from "next/navigation";
import { useEffect } from "react";

const params: string[] = [];

const ListingClient = () => {
  const listingParams = usePathname();

  if (listingParams !== null) {
    params.push(listingParams);
  }

  useEffect(() => {
    setTimeout(() => {
      params.length = 0;
    }, 2000);
  }, [params]);

  return <div>ListingClient</div>;
};

const updatedParams: string[] = params.map((param) => {
  const matchResult = param.match(/\/listings\/(.+)/)?.[1];
  return matchResult || ""; // return an empty string if no match is found
});

export { updatedParams };
export default ListingClient;

