import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/ColorForm.css";

const ColorForm = ({ addColor }) => {
	const history = useHistory();
    const [newColor, setNewColor] = useState({ name: '', value: "#000000" });
    const [showError, setShowError] = useState(false)
    
 
    const handleChange = (evt) => {
        const {name, value} = evt.target
        setNewColor((c) => ({
            ...newColor,
            [name]: value
        }));
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        if (newColor.name) {
            addColor(newColor);
            history.push("/colors");
        } else {
            setShowError(true)
        }
    };
    
    const colorRequiredError = <div style={{color:"red"}}>A color name is required</div>

	return (
		<div className="ColorForm-container">
            <form onSubmit={handleSubmit} className="ColorForm">
                <div>
                    <label htmlFor="color-name">Color Name:</label>
                    <input
                        name="name"
                        value={newColor.name}
                        onChange={handleChange}
                    />
                </div>

				<div>
                    <label htmlFor="color-value">Value:</label>
                    <input type="color" name="value" id="color-value" onChange={handleChange} />
                    <div className="ColorFrom-btn-container">
                </div>
                    <button>Add Color</button>
                    {showError && colorRequiredError}
				</div>
			</form>
		</div>
	);
};

export default ColorForm;
