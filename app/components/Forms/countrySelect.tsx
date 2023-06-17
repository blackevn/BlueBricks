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

  return ( 
    <div>
      <Select
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
        className='select'
        classNames={{
          option: () => 'bg-[#161616] border-none z-[999]',
          container: () => 'bg-[#161616] border-none z-[999]',
          control: () => 'bg-[#161616] border-none z-[999]',
          group: () => 'bg-[#161616] border-none z-[999]',
          menu: () => 'bg-[#161616] border-none z-[999]',
          menuList: () => 'bg-[#161616] border-none z-[999]',
          input: () => 'border-none z-[999] bg-none'
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 12,
          colors: {
            ...theme.colors,
            primary: '#161616',
            primary25: '#161616 '
          }
        })}
      />
    </div>
   );
}
 
export default CountrySelect;