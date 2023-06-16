'use client';

import Select from 'react-select'

import { useCountries } from '@/app/hooks';
import React, { ChangeEventHandler } from 'react';
import { Listing } from '@/types/interfaces';
import { setPriority } from 'os';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: string
  setPropertyInfo: React.Dispatch<React.SetStateAction<Listing>>
  propertyInfo: Listing

}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  setPropertyInfo,
  propertyInfo

}) => {
  const { getAll, countries } = useCountries();

  return <select 
          value={value} 
          placeholder='Anywhere' 
          name='location' 
          onChange={() => setPropertyInfo(prevInfo => ({...prevInfo, location: {...propertyInfo.location, value}}))} 
          className="select">
          {countries.map((item) => (<option>{item.flag}{`${item.name.common}` }</option>))}
        </select>
}
 
export default CountrySelect;