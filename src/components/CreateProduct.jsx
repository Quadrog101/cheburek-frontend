import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
 
export default function CreateProduct() {
    const navigate = useNavigate();
 
    const [inputs, setInputs] = useState([]);
 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs, [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
 
        axios.post('https://dimdey.live/dev/api/', inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
         
    }
    return (
        <div className="create-block">
            <h1>Create product</h1>
            <form onSubmit={handleSubmit}>
                <div className="create-block__row">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleChange} />
                </div>
                <div className="create-block__row">
                    <label>Price</label>
                    <input type="text" className="form-control" name="price" onChange={handleChange} />
                </div>
                <div className="create-block__row">
                    <label>Description</label>
                    <input type="text" className="form-control" name="description" onChange={handleChange} />
                </div>    
                <button type="submit" name="add" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}