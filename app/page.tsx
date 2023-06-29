import { useState } from "react";
import { getListings } from "./actions";
import { ListCard } from "./components";
import { ListLoading } from "./components/Loading";

const page = async () => {

  const listings = await getListings()

  const [ isLoading, setIsLoading ] = useState(false)

  return <div>
          { !isLoading ? <ListLoading/> : <ListCard listings={listings}/>}
          </div>;
};

export default page;
