'use client'

import { IconDefinition, faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ModalProps = {

    children?: React.ReactNode;
    modifier?: string
    label?: string
    icon?: IconDefinition

}

const Modal: React.FC<ModalProps> = ({children, modifier, label, icon = faIcons}) => {

return <>
      <label className={`btn ${modifier} space-x-2`} htmlFor="modal-1"> 
      <FontAwesomeIcon icon={icon}/>
      <span>{label}</span>
      </label>
        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal">
            <label className="modal-overlay" htmlFor="modal-1"></label>
            <div className="modal-content flex flex-col gap-5">
                <label htmlFor="modal-1" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
               <div>{children}</div>
            </div>
        </div>
    
        </>
};

export default Modal;
