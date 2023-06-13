import { Categories, NavigationLinks } from "@/types/interfaces";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { GiBeachBucket, GiWindmill } from 'react-icons/gi'
import { HiHomeModern } from 'react-icons/hi2'

const useLinks = () => {

    const links: NavigationLinks[] = [
      
        {
            id: 1,
            icon: faIcons,
            name: 'Link',
            href: '/'
        }
    ]

    const menuItems = [

        {
            id: 1,
            name: 'My Reservations',
            icon: faIcons
        },
        {
            id: 2,
            name: 'My Favorites',
            icon: faIcons
        },
        {
            id: 3,
            name: 'My Favorites ',
            icon: faIcons
        },
        {
            id: 4,
            name: 'My Favorites ',
            icon: faIcons
        },
       
    ]

    const categories: Categories[] = [

        {
            id: 1,
            icon: GiBeachBucket,
            name: 'Beach',
            link: 'Link' 
        },
        {
            id: 2,
            icon: HiHomeModern,
            name: 'Modern',
            link: 'Link' 
        },
        {
            id: 3,
            icon: GiWindmill,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 4,
            icon: GiWindmill,
            name: 'Windmill',
            link: 'Link' 
        },
        {
            id: 5,
            icon: GiWindmill,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 6,
            icon: GiWindmill,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 7,
            icon: GiWindmill,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 8,
            icon: GiWindmill,
            name: 'Category',
            link: 'Link' 
        },
       
    ]

  return { categories, links, menuItems }
};

export default useLinks;
