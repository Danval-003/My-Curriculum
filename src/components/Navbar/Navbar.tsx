import React from "react";
import './Navbar.scss';

interface NavbarProps {
    select: number;
    selections: string[];
    setSelection: (selection: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ select, selections, setSelection }) => 
(
        <div className="navBar">
            <ul>
                {selections.map((selection, index) => (
                    <li key={index} className={select === index ? 'selected' : ''}>    
                        <button
                            onClick={() => setSelection(index)}
                        >
                            {selection}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
);


export default Navbar;
