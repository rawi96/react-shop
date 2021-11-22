import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg"

function Header() {
    return (
     <div className="flex justify-between my-5 px-4 h-10">
       <Link to ="/">
         <Logo></Logo>
       </Link>
       <div className="flex items-end text-xl">
         <Link className="" to="shop">Shop</Link>
         <Link className="ml-7" to="contact">Contact</Link>
       </div>
     </div>
    );
  }
  
  export default Header;
  