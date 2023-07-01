'use client'

import { IUser,  } from "@/types/interfaces";
import { Reservation, Listing } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCountries } from "../../hooks";
import React, { useCallback, useMemo } from "react";
import { format } from 'date-fns';
import Image from "next/image";

type ListingProps = {
  listing: Listing
  reservation?: Reservation
  currentUser?: IUser
  onAction?: (id: string) => void
  disabled?: boolean
  actionLabel?: string
  actionId?: string 
  
 
}

const ListCard: React.FC<ListingProps> = ({ 
                                          reservation,
                                          listing, 
                                          currentUser,
                                          onAction, disabled,
                                          actionId = '',
                                          actionLabel,
                                          }) => {

const router = useRouter()
const { getByValue } = useCountries()
const location = getByValue(listing?.locationValue)

const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
  e.stopPropagation()
  if (disabled) return
  onAction?.(actionId)

}, [onAction, disabled, disabled])

 const price = useMemo(() => {
  if(reservation) {
    return reservation.totalPrice
  }

  return listing.price
 }, [reservation, listing.price])

 const reservationDate = useMemo(() => {
  if (!reservation) {
    return null;
  }

  const start = new Date(reservation.startDate);
  const end = new Date(reservation.endDate);

  return `${format(start, 'PP')} - ${format(end, 'PP')}`;
}, [reservation]);

return <div 
        onClick={() => router.push(`/listings/${listing?.id}`)} 
        className="col-span-1 cursor-pointer hover:bg-gray-2 rounded-2xl transition-all p-2"
        >
          <Image
          src={listing?.imageSrc.toString()}
          alt="Listing image"
          className='rounded-lg max-h-[200px] w-full lg:max-h-[200px] lg:max-w-[300px] object-cover'
          />
          <h1>{reservationDate || listing?.category}</h1>
          <h1>{listing?.title}</h1>
          <h1 className="font-bold">{location?.region}, {location?.label}</h1>
          <h1 className="font-black">${listing?.price}</h1>


      </div>
};

export default ListCard;