'use client'

import { IconType } from "react-icons";

type ModalProps = {

    children?: React.ReactNode;
    modifier?: string
    label?: string
    icon: IconType
    modal?: string
    toggle?: boolean
}

const Modal: React.FC<ModalProps> = ({children, modifier, label, icon: Icon, modal, toggle}) => {

return <>
      <label className={`flex ${modifier} space-x-2 items-center`} htmlFor={`${modal}`}> 
        <Icon/>
        <span>{label}</span>
      </label>
        <input className="modal-state w-auto" id={`${modal}`} type="checkbox" />
        <div className="modal">
            <label className="modal-overlay" htmlFor={`${modal}`}></label>
            <div className="modal-content flex flex-col gap-5">
                <label htmlFor={`${modal}`} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
               <div>{children}</div>
            </div>
        </div>
    
        </>
};

export default Modal;
