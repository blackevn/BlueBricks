import { Listing } from "@/types/interfaces";
import { getListings } from "./actions";
import { ListCard } from "./components";
import { ListLoading } from "./components/Loading";


const page = async () => {

  const listings = await getListings()

  let isLoading = false

  let loading: number[] = [ 0 , 1, 2, 3, 4, 5, 6 , 7, 8 ]
 
  return <div className='p-32'>
          { !listings ? 
           <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
           { loading.map(() => <ListLoading/>) } 
          </div>

           : 
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">
            {listings.map((list) => ( <ListCard 
                                       key={list.id} 
                                       listing={list}
                                       /> 
                                       ))}
          </div>
          }
          </div>;
};

export default page;
