'use client';

import Select from 'react-select'

import { useCountries } from '@/app/hooks';
import React, { ChangeEventHandler } from 'react';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: ChangeEventHandler<HTMLSelectElement>
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const { getAll, countries } = useCountries();

  return <select onChange={onChange} className="select">
          {countries.map((item) => (<option>{`${item.name.common}` }</option>))}
        </select>
}
 
export default CountrySelect;