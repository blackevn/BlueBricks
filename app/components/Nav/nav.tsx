'use client'

import { faArrowCircleRight, faIcons, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import UserDropdown from "../userDropdown";
import Modal from "../Modal/modal";
import AuthForm from "../Forms/AuthForm";
import { IUser } from "@/types/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLinks } from "@/app/hooks";
import { signOut } from "next-auth/react";
import { FaArrowCircleRight } from "react-icons/fa";

interface NavbarProps {
    currentUser: IUser | null
}

const Nav: React.FC<NavbarProps> = ({ currentUser }) => {

  const { menuItems } = useLinks()

    return <>
            <nav className="w-screen flex justify-between items-center box-border">
                <div className="flex w-full justify-between items-center p-4 lg:px-10">
                <h1 className=" text-xl font-bold text-blue-600">Blue Bricks</h1>

                { currentUser?.name ? <UserDropdown
                                      modifier="bg-gray-2"
                                      currentUser={currentUser}
                                      >
                                    <nav className="menu rounded-md ">
                                        <section className="menu-section">
                                            <ul className="menu-items">
                                             {menuItems.map((menuButton) => (<li className="menu-item gap-4">
                                                                            <FontAwesomeIcon icon={menuButton.icon}/>
                                                                            <span>Payments</span>
                                                                            </li>))  }
                                            <li 
                                            onClick={() => signOut()}
                                            className="menu-item gap-4">
                                            <FontAwesomeIcon icon={faSignOut}/>
                                            <span>Signout</span>
                                            </li>
                                            </ul>
                                        </section>
                                    </nav>
                        </UserDropdown>
                    :

                 <Modal
                 label="Login"
                 modifier=""
                 icon={FaArrowCircleRight}
                 >
                    <AuthForm/>
                 </Modal>
                }
                </div>
            </nav>
           </>

};

export default Nav;
