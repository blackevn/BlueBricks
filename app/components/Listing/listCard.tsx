'use client'

import { IUser,  } from "@/types/interfaces";
import { Reservation, Listing } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCountries, useFavourite, useToggle } from "../../hooks";
import React, { useCallback, useMemo } from "react";
import { format } from 'date-fns';
import Image from "next/image";
import Button from "../button";
import { FaHeart } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsCalendarPlusFill } from "react-icons/bs";

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

const listingId = listing.id
const router = useRouter()
const { getByValue } = useCountries()
const location = getByValue(listing?.locationValue)
const [ favoriteToggle, handleFavoriteToggle ] = useToggle()
const { hasFavorited, toggleFavorite } = useFavourite({
  listingId,
  currentUser
});

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
        className="col-span-1 cursor-pointer hover:bg-gray-2 rounded-2xl transition-all p-2 space-y-4"
        >
          <Image
          src={listing?.imageSrc.toString()}
          alt="Listing image"
          className='rounded-lg max-h-[200px] w-full lg:max-h-[200px] lg:max-w-[300px] object-cover'
          />
          <div className="space-y-4">
          <div className="flex justify-between">
          <h1 className="rounded-full grid place-items-center px-2 py-0 text-[12px] font-thin bg-gray-3 italic">{reservationDate || listing?.category}</h1>
          <Button
          icon={hasFavorited || favoriteToggle ? AiFillHeart : AiOutlineHeart}
          text=""
          modifier="text-lg"
          clickEvent={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation()
            toggleFavorite
            handleFavoriteToggle()
          }}
          />
          </div>
          <div>
          <h1 className="font-bold">{location?.region}, {location?.label}</h1>
          <h1>{listing?.title}</h1>
          <h1 className="font-bold">${listing?.price}/night</h1>
          </div>
          </div>
          <Button
          text="Reserve"
          icon={BsCalendarPlusFill}
          modifier="w-full btn m-auto"
          />
      </div>
};

export default ListCard;