import axios from "axios" //npm install axios --save
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
export default function ListProduct() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
 
    function getProducts() {
        axios.get('http://quadrog.rf.gd/dev/api/').then(function(response) {
            console.log(response.data);
            setProducts(response.data);
        });
    }
 
    const deleteProduct = (id) => {
        axios.delete(`http://quadrog.rf.gd/dev/api/${id}/`).then(function(response){
            console.log(response.data);
            getProducts();
        });
    }

    return (
        <div className="ss">
            <h1>Чебуреки</h1>
            <div className="d-flex flex-wrap">
                {products.map((product, key) => (
                    <div className="card" key={key}>
                        <img src="img/cheburek_logo.png" width={150} height={150} alt="noimg"></img>
                        <h5>{product.name}</h5>
                        <p>{product.description}</p>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>{product.price} руб.</b>
                            </div>
                            <Link to={`product/${product.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                            <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
