import React  from "react";
import PropTypes from "prop-types";

const FormPage = ({inputs, setInputs}) => {
    
    const changeValue = (event) => {
        setInputs({
            ...inputs,
            [event.target.name] : event.target.value
        })
    }
    return (
        <form>
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name"  onChange={changeValue} />
            </div>
            <div>
                <label htmlFor="lastName">Apellido</label>
                <input type="text" name="lastName" onChange={changeValue} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={changeValue} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={changeValue} />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={changeValue} />
            </div>
        </form>
    );
}
FormPage.propTypes = {
    inputs: PropTypes.object.isRequired,
    setInputs: PropTypes.func.isRequired
};
export default FormPage;
