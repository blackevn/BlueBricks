'use client';

import { useCallback } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value?: number ;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value ? value + 1 : 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 1) {
      return;
    }

    onChange(value ? value - 1 : 1);
  }, [onChange, value]);

  return <>
            <div className="flex w-full items-center">
              <div className="space-y-2">
                <h1  className="text-xl">{title}</h1>
                <h1>{subtitle}</h1>
              </div>
              <div className="flex gap-4 items-center">
                <AiFillMinusCircle
                onClick={onReduce}
                />
                <h1 className="text-xl">{value}</h1>
                <AiFillPlusCircle
                onClick={onAdd}
                />
              </div>
            </div>
        </>
}
 
export default Counter;