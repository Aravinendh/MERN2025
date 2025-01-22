import { useState } from "react";

const Navbar=()=>{
    var [dropdown,showDropdown]=useState(false)
    const toggleDropdown=()=>{
        showDropdown(dropdown= !dropdown)
    }
    return(
        <header>
            <nav>
                <ol>
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/About' className="link">About</Link></li>
                    <li><Link to='/Gallery' className="link">Gallery</Link></li>
                    <li><Link to='/Contact' className="link">Contact</Link></li>
                   <div>
                    <span onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} >Hooks</span>
                    {dropdown && (
                        <ul>
                            <li><Link to='/use-state' target ='_blank'></Link></li>
                            <li>useEffect</li>
                        </ul>
                    )}
                   </div>
                </ol>
            </nav>
        </header>

    );
};
export default Navbar;