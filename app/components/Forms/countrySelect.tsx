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
      color: state.isSelected ? "#212529" : "#fff",
      zIndex: 99,
      backgroundColor: state.isSelected ? "#2563EB" : "#008080",
    }),

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: "#161616",
      padding: "1em",
      border: "none",
      borderRadius: '1em',
      boxShadow: "none",
      zIndex: 99
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "#fff" }),
  };

  return ( 
    <div>
      <Select
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