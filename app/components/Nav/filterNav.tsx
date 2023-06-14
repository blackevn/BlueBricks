'use client'

import { useLinks, useToggle, useVariants, useWidth } from "@/app/hooks"
import FilterItem from "./filterItem"
import Button from "../button"
import { FiSearch} from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { HiArchive, HiAdjustments } from 'react-icons/hi'
import { HiOutlineXMark } from 'react-icons/hi2'
import { motion } from "framer-motion"
import Input from "../input"
import { useSearchParams } from "next/navigation"


const FilterNav: React.FC = () => {

  const { categories } = useLinks()
  
  const [ width ]  = useWidth()
  const { filterNavVariants } = useVariants()
  const [ toggleSearch, handleToggleSearch, setSearch ] = useToggle(false)
  const [ toggleSearchPanel, handleToggleSearchPanel, setSearchPanel ] = useToggle(false)
  const [ categoriesToggle, handleCatergories, setCatergories ] = useToggle(false)
  const param = useSearchParams()
  const category = param?.get('category')

  

    const closeSearch = () => {
        setSearch(false)
        setSearchPanel(false)
    }

    const closeCatogories = () => {
        setCatergories(false)
    }

  
  return <>
            <div className="flex justify-between items-center px-4 lg:px-10 py-6 box-border gap-4 lg:gap-6 relative">
              { toggleSearch && <motion.div 
                variants={filterNavVariants}
                animate='show'
                initial='hidden'    
                className="absolute z-10 h-full left-0 bg-backgroundPrimary w-full flex gap-2 px-4 lg:px-10 items-center">
                       <div className='flex w-full items-center'>
                        <Input
                        type="search"
                        onFocus={handleToggleSearchPanel}
                        value=""
                        name=""
                        modifier="h-full w-full text-[1rem] lg:text-[1.2rem] bg-backgroundPrimary outline-none"
                        placeholder="Search Cities, Towns, Styles.... "
                        iconModifier=" text-[1.5em] lg:text-[2em]"
                        icon={FiSearch}
                        />
                        <Button 
                        text=''
                        modifier="h-full text-[1.5em] lg:text-[2em] lg:p-8"
                        clickEvent={closeSearch}
                        icon={HiOutlineXMark}/>
                       </div>
                       
                </motion.div>}

              {width >= 700 || categoriesToggle && <motion.div 
                variants={filterNavVariants}
                animate='show'
                initial='hidden'    
                className="absolute z-10 h-full left-0 bg-backgroundPrimary w-full flex gap-2 px-4 lg:px-10 items-center">
                    <div className='flex gap-2 lg:gap-6 overflow-x-scroll item-center'>
                     { categories.map(item => (<FilterItem
                                              key={item.id}
                                              id={item.id}
                                              icon={item.icon}
                                              name={item.name}
                                              selected={category === item.name}
                                              />))}

                    </div>
                    <Button
                    clickEvent={closeCatogories}
                    modifier="h-full text-[1rem] lg:text-[1.2rem] lg:p-6"
                    icon={HiOutlineXMark}
                    text=""
                    />
                </motion.div>}

              { width >= 700 ?  <div className="flex gap-2 lg:gap-6 overflow-x-scroll w-[70%] lg:w-full">
                    { categories.map(item => (<FilterItem
                                              key={item.id}
                                              id={item.id}
                                              icon={item.icon}
                                              name={item.name}
                                              selected={category === item.name}
                                              />))}
                </div> : 

                <Button
                modifier="border lg:p-6 text-[0.5rem] "
                text="Categories"
                clickEvent={handleCatergories}
                icon={HiArchive}
                />
                }
                <div className="gap-2 md:gap-4 lg:gap-8 flex">
                <Button
                 icon={HiAdjustments}
                 text="Filter"
                 modifier="lg:p-6 border text-[0.5rem] "
                />
                <Button
                icon={FiSearch}
                modifier="rounded-full lg:p-6 border text-[0.5rem] "
                text=""
                clickEvent={handleToggleSearch}
                />
                </div>
            </div>

                 {toggleSearchPanel && <div className="w-full min-h-[500px] bg-backgroundPrimary fixed grid place-items-center">
                        <div className="grid place-items-center gap-8">
                            <FiSearch className="text-[1.5em] lg:text-[2em]"/>
                        <h1>No recent searches</h1>
                        </div>
                
                        </div>}
        </>  
}

export default FilterNav