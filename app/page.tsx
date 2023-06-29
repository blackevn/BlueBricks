import { getListings } from "./actions";
import { ListCard } from "./components";
import { ListLoading } from "./components/Loading";

const page = async () => {

  const listings = await getListings()

  let isLoading = false

  let loading: any = [ 0 , 1, 2, 3, 4, 5, 6 , 7, 8 ]
 
  return <div className='p-8'>
          { !isLoading ? 
          <div className="grid grid-cols-3 gap-4">
           { loading.map(() => <ListLoading/>) } 

          </div>
           : 
          <ListCard listings={listings}/>}
          </div>;
};

export default page;
