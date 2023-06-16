'use client';

import Select from 'react-select'

import { useCountries } from '@/app/hooks';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const { getAll } = useCountries();

  return <select className="select">
          {getAll.name}
        </select>
}
 
export default CountrySelect;