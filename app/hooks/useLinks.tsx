import { Categories, NavigationLinks } from "@/types/interfaces";
import { faIcons } from "@fortawesome/free-solid-svg-icons";

const useLinks = () => {

    const links: NavigationLinks[] = [
        {
            id: 1,
            icon: faIcons,
            name: 'Link',
            href: '/'
        }
    ]

    const categories: Categories[] = [
        {
            id: 1,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 2,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 3,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 4,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 5,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 6,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 7,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
        {
            id: 8,
            icon: faIcons,
            name: 'Category',
            link: 'Link' 
        },
       
    ]

  return { categories, links }
};

export default useLinks;
