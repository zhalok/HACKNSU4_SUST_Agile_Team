import { useState } from "react";
import './style.css'
function Dropdown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const stations = ["Dhaka", "Sylhet", "Tangail", "Chittagong"];
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e)=>
            setIsActive(!isActive)}>
                Choose One
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive &&(
                <div className="dropdown-content">
                    {stations.map((station) => (
                        <div
                            onClick={(e) =>{
                                setSelected(station);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                            >
                                {station}
                        </div>
                    ))}

                </div>
            )}

        </div>
    );

}
export default Dropdown;