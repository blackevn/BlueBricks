import { IUser } from "@/types/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { Toast } from "../components";
import { AiFillHeart } from "react-icons/ai";
import { FaExclamationTriangle } from "react-icons/fa";

interface IUseFavorite {
  listingId: string;
  currentUser?: IUser | null
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(async () => {

    try {
      let request;

      if (hasFavorited) {
        request = () => axios.delete(`/api/favorites/${listingId}`);
      } else {
        request = () => axios.post(`/api/favorites/${listingId}`);
      }

      await request();
      router.refresh();
      toast.custom(() => (
        <Toast text="Favorited" modifier="bg-red-400 text-white" icon={AiFillHeart}/>
        ))
    } catch (error) {
      toast.custom(() => (
        <Toast text="Something went wrong" modifier="bg-green-500 text-white" icon={FaExclamationTriangle}/>
        ))
    }
  }, 
  [
    currentUser, 
    hasFavorited, 
    listingId, 
    router
  ]);

  return {
    hasFavorited,
    toggleFavorite,
  }
}

export default useFavorite;