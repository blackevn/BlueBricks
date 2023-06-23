import { Listing } from "@prisma/client";
import { getCurrentUser, getListings } from "../actions";
import { IUser } from "@/types/interfaces";

const useAllData = async () => {

 const listings = await getListings()
 const user= await getCurrentUser()

  return listings
};

export default useAllData; 
