import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";

const Nav = () => {
  
    return <>
            <nav className="w-screen flex justify-between items-center box-border">
                <div className="flex w-full justify-between items-center p-4 lg:px-10">
                <h1 className=" text-xl font-bold text-blue-600">Blue Bricks</h1>

                {<Button
                    text="Login"
                    modifier="btn"
                    icon={faArrowAltCircleRight}
                />}
                </div>
            </nav>
           </>

};

export default Nav;
