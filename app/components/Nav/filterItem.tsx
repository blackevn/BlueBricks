import { IconDefinition, faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchParams,  useRouter } from "next/navigation";
import qs from "query-string"
import { IconType } from "react-icons";

type FilterItemProps = {
    id: number
    icon: IconType,
    name: string
    selected?: boolean
}

const FilterItem: React.FC<FilterItemProps> = ({ icon: Icon, name = "Categories", selected }) => {

const params = useSearchParams()
const router = useRouter()

const handleParams = () => {
    let currentParam = {}

    if ( params ){
        currentParam = qs.parse(params.toString())
    }

    const updatedParam: any = {
        ...currentParam,
        category: name
    }

    if(params?.get('category') === name ) {
        delete updatedParam.category
    }

    const url = qs.stringifyUrl({
        url: '/',
        query: updatedParam
    }, { skipNull: true })

    router.push(url)
}
   
  return <>
        
                <div
                onClick={handleParams}
                className={` ${selected && 'bg-gray-3'} grid place-items-center gap-2 lg:gap-4 cursor-pointer p-2 lg:p-4 hover:bg-blue-600 rounded-lg lg:rounded-2xl w-20 lg:w-24 h-full`}>                
                    <Icon className="w-8 h-8"/>
                    <h1 className="text-[12px] md:text-md">{name}</h1>
                </div>
          
        </>
};

export default FilterItem;
