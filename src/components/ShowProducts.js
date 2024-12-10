import axios from "axios";
import { useState, useEffect } from "react";

function ShowProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/products");
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error:", error);
            }
        }

        getProducts();
    }, []);

    return (
        <div className="list">
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <li>{product.name}</li>
                        <a href={`/products/${product.id}`}>Details</a>
                    </div>
                ))}
            </ul>
            <a href="/">Back to main page</a>
        </div>
    );
}

export default ShowProducts; 