import { IconDefinition, faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type FilterItemProps = {
    id: number
    href?: string
    icon: IconDefinition,
    name: string
}

const FilterItem: React.FC<FilterItemProps> = ({ href = '/', icon = faIcons, name = "Categories" }) => {

    
  return <>
            <Link href={href} className={`hover:bg-blue-500 hover:text-white p-2 lg:p-4 rounded-2xl`}>
                <div className="grid place-items-center gap-2 lg:gap-4">                
                    <FontAwesomeIcon icon={icon}/>
                    <h1 className="text-[12px] md:text-md">{name}</h1>
                </div>
            </Link>
        </>
};

export default FilterItem;
