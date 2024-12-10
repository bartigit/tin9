import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const productData = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: formData.get('price'),
        };

        try {
            const response = await axios.post('http://localhost:5000/api/admin/products/', productData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const productId = response.data.product.id;
                navigate(`/products/${productId}`);
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='add-product'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" id="name" name="name" required />

                <label>Description:</label>
                <input type="text" id="description" name="description" required />

                <label>Price:</label>
                <input type="number" id="price" name="price" required />

                <button type="submit">Add Product</button>
                <a href="/">Back to main page</a>
            </form>
        </div>
    );
}

export default AddProduct;
