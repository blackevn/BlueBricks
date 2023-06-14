'use client'

import { useSearchParams,  useRouter } from "next/navigation";
import qs from "query-string"
import { useCallback } from "react";
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

const handleParams = useCallback(() => {

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
}, [ router, params, name, selected]) 
   
  return <>
        
                <div
                onClick={handleParams}
                className={` ${selected && 'bg-gray-3'} filterItem`}>                
                    <Icon className="text-lg lg:text-xl "/>
                    <h1 className="text-[12px] md:text-md">{name}</h1>
                </div>
          
        </>
};

export default FilterItem;
