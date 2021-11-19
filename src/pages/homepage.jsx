import Directory from "../components/directory";
import MenuItem from "../components/menu-item";

function Homepage() {
    return (
     <div className="flex flex-col items-center px-2 py-8">
       <Directory>
         <MenuItem></MenuItem>
         <MenuItem></MenuItem>
         <MenuItem></MenuItem>
       </Directory>
     </div>
    );
  }
  
  export default Homepage;
  