import { Listing } from "@prisma/client";


type ListingProps = {
  listings?: Listing[]
}

const Home: React.FC<ListingProps> = ({ listings }) => {

  console.log(listings);
  
return <div>Home</div>
};

export default Home;
