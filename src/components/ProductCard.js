import "../styles/ProductCard.css"
import { Link } from "react-router-dom";

import product from '../data/product.js'

function deleteProduct(id){
    const index = product.findIndex(product => product.id === id);
    // console.log(typeof index)
    if (index !== -1) {
        product.splice(index, 1);
        console.log(`Product with id ${id} has been deleted successfully.`);
    } else {
        console.log(`Product with id ${id} not found.`);
    }
}


function ProductCard(props) {
    return ( 
 
        <div  className="term">
            <dt>
                <span className="product-image" role="img" aria-label="Tense Biceps">
                    <img style={{width:"200px", height:"200px", borderRadius: "5%"}} src={props.image} alt="Product"/>
                </span>
                <span>{props.name}</span>
                <br/>
                <br/>
                <span>$ {props.price}</span>
                
            {/* <p>{props.id}</p> */}
            </dt>
                <dd>{props.description}</dd>

            <div>
            <Link className="edit-button" to="/edit" style={{padding:"5px"}}> Edit </Link>
            <Link className="delete-button" to="/product" style={{padding:"5px"}} > Delete </Link>
            {/* <button className="delete-button" onClick={deleteProduct(props.id)}>Delete</button>  */}
            </div>  
        </div> 
    );
}


export default ProductCard;