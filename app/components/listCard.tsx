import { IUser } from "@/types/interfaces";
import { Listing, Reservation } from "@prisma/client";


type ListingProps = {
  listings?: Listing[]
  reservation?: Reservation
  currentUser?: IUser
  
}

const ListCard: React.FC<ListingProps> = ({ listings }) => {

  console.log(listings);
  
return <div>ListCard</div>
};

export default ListCard;