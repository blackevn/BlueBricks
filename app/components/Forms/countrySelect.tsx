'use client';

import Select from 'react-select'

import useCountries from '@/app/hooks/useCountries';

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[],
  region: string;
  value: string
}

interface CountrySelectProps {
  value?: any
  onChange: any
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange
}) => {
  const { getAll } = useCountries();

  const customStyles = {
    option: (defaultStyles: any, state: any) => ({
      ...defaultStyles,
      color: state.isSelected ? "#2563EB" : "#161616",
      zIndex: 99,
      width: '35vw',
      backgroundColor: state.isSelected ? "#2563EB" : "#161616",
    }),
    input: () => ({
      width: '35vw'
    }),
    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#161616",
      border: "none",
      borderRadius: '1em',
      boxShadow: "none",
      zIndex: 99,
      width: '35vw'
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#2563EB" }),
  };

  return ( 
    <div>
      <Select
        menuPlacement="top"
        styles={customStyles}
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value)}
        formatOptionLabel={(option: any) => (
          <div className="
          flex flex-row items-center gap-3">
            <div>{option.flag}</div>
            <div>
              {option.label},
              <span className="text-neutral-500 ml-1">
                {option.region}
              </span>
            </div>
          </div>
        )}
        className=' z-[999]'
        
         />
    </div>
   );
}
 
export default CountrySelect;