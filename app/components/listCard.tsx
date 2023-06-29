import { IUser,  } from "@/types/interfaces";
import { Reservation, Listing } from "@prisma/client";


type ListingProps = {
  listings?: Listing
  reservation?: Reservation
  currentUser?: IUser
 
}

const ListCard: React.FC<ListingProps> = ({ listings }) => {

  console.log(listings);
  
return <div>{listings?.title}</div>
};

export default ListCard;