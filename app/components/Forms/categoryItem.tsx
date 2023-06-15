
import { useGeneralContext } from "@/app/context/AppContext";
import { Listing } from "@/types/interfaces";
import { IconType } from "react-icons";

type CategortItemsProps = {
     selected?: boolean
     icon: IconType
     name: string
}

const { propertyInfo, setPropertyInfo } = useGeneralContext()

const categoryItem: React.FC<CategortItemsProps> = ({ icon: Icon, selected, name }) => {

     const categorySelect = () => {
          setPropertyInfo((prevInfo: Listing) => ({...prevInfo, category: name}))
     }

     console.log(propertyInfo)

  return <h1
          onClick={categorySelect}
          className="rounded-md hover:bg-backgroundSecondary p-4 text-center cursor-pointer flex gap-2 items-center">
            <Icon className="text-xl"/>{name}
        </h1>
};

export default categoryItem;
