import { Listing } from "@/types/interfaces";
import { ListCard } from "./components";
import { ListLoading } from "./components/Loading";
import { useEffect, useState } from "react";
import  { getListings } from "./actions";
import  { IListingsParams } from "./actions/getListings";
import { NextPage } from "next";
 
interface HomeProps {
  searchParams: IListingsParams
};

const page: NextPage<HomeProps> = async ({searchParams}) => {

  const listings = await getListings(searchParams)
 
  let loading: number[] = [ 0, 1, 2, 3, 4, 5, 6 , 7, 8 ]
 
  return <div className='px-5 md:px-10 lg:px-32'>
          { !listings.find((list) => list.imageSrc) ?
           <div className="listGrid">
           { loading.map(() => <ListLoading/>) } 
          </div>

           : 
          
          <div className="listGrid">
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
