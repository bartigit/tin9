import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
    const [product, setProduct] = useState({});
    const {id} = useParams();


    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/admin/products/${id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    
        getProduct();
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <a href="/products">Back</a>
        </div>
    );
}    
export default ProductDetails;