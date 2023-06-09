'use client'

import { useLinks, useToggle, useVariants } from "@/app/hooks"
import { Categories } from "@/types/interfaces"
import FilterItem from "./filterItem"
import Button from "../button"
import { faEllipsisH, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import Input from "../input"

const FilterNav: React.FC = () => {

  const { categories } = useLinks()
  const { filterNavVariants } = useVariants()
  const filterNavController = useAnimationControls()
  const [ toggleSearch, handleToggleSearch ] = useToggle(false)
  const [ toggleSearchPanel, handleToggleSearchPanel ] = useToggle(false)
  
  useEffect(() => {

    filterNavController.start('show')

  }, [toggleSearch])
  
    useEffect(() => {
  
      filterNavController.start('hidden')
  
    }, [!toggleSearch])

    const closeSearch = () => {
        handleToggleSearchPanel()
        handleToggleSearch()
    }

  
  return <>
            <div className="flex justify-between items-center px-4 lg:px-10 py-6 box-border gap-4 lg:gap-6 relative">
              { toggleSearch && <motion.div 
                variants={filterNavVariants}
                animate='show'
                initial='hidden'    
                className="absolute z-10 h-full left-0 bg-backgroundPrimary w-full flex flex-col gap-2 px-4 lg:px-10">
                       <div className='flex w-full'>

                        <Input
                        type="search"
                        onFocus={handleToggleSearchPanel}
                        value=""
                        name=""
                        modifier="h-full w-full text-[2em] bg-backgroundPrimary outline-none"
                        placeholder="Search..."
                        />
                        <Button 
                        text=''
                        modifier="h-full text-[2em] lg:p-8"
                        clickEvent={closeSearch}
                        icon={faXmark}/>
                       </div>
                        {toggleSearchPanel && <div className="w-full min-h-[500px] bg-white">

                        </div>}
                </motion.div>}
                <div className="flex gap-2 lg:gap-6 overflow-x-scroll w-[70%] lg:w-full">
                    { categories.map(item => (<FilterItem
                                              id={item.id}
                                              href={item.link}
                                              icon={item.icon}
                                              name={item.name}
                                              />))}
                </div>
                <div className="gap-2 md:gap-4 lg:gap-8 flex">
                <Button
                 icon={faEllipsisH}
                 text="Filter"
                 modifier="lg:p-8 border"
                />
                <Button
                icon={faSearch}
                modifier="rounded-full lg:p-8 border"
                text=""
                clickEvent={handleToggleSearch}
                />
                </div>
            </div>
        </>  
}

export default FilterNav