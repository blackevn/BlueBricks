import { Listing } from "@/types/interfaces";
import { useState } from "react";
import { useGeneralContext } from "../context/AppContext";
import { toast } from "react-hot-toast";
import { Toast } from "../components";
import { AiFillCheckCircle } from "react-icons/ai";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}


const useAddProperty = () => {

    const initialListingInfo: Listing = {
      category: '',
      location: undefined,
      guestCount: 1,
      roomCount: 1  ,
      bathroomCount: 1,
      imageSrc: '',
      price: 1,
      title: '',
      description: '',
    }
  
    const [ propertyInfo, setPropertyInfo ] = useState<Listing>(initialListingInfo)
    const [ step, setStep ] = useState(STEPS.CATEGORY);
    const { setAddModalToggle } = useGeneralContext()
    const handleAddProperty = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, name, checked} = e.target
      const newValue = type === "checkbox" ? checked : value;
      setPropertyInfo((prevData) => ({
      ...prevData,
      [name]: newValue,
      }))
  }

  const onBack = () => {
    if( step === STEPS.CATEGORY){
      setStep(0)
    } else {
      setStep((prevValue) => prevValue - 1);
    }
  }

  const onNext = () => {
    if( step === STEPS.PRICE){
      setStep(5)
    } else {
    setStep((prevValue) => prevValue + 1);
  }
  }

  const onAddProperty = () => {
    setAddModalToggle()
    toast.custom(() => (<Toast text="Property added" modifier="bg-green-500 text-white" icon={AiFillCheckCircle}/>))
  }

  const addOrNext = () => {

    if (step === STEPS.PRICE) {
      toast.custom(() => (<Toast text="Property added" modifier="bg-green-500 text-white" icon={AiFillCheckCircle}/>))
    } else {
      onNext()
    }
     
  }
  return {propertyInfo, setPropertyInfo, handleAddProperty, onBack,
          onNext, STEPS, step, onAddProperty, addOrNext}
};

export default useAddProperty;
