import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products'; 

// GET
export const getProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// POST
export const createProduct = async (productData) => {
    const response = await axios.post(API_URL, productData);
    return response.data;
};

// // PUT
// export const updateProduct = async (id, productData) => {
//     const response = await axios.put(`${API_URL}/${id}`, productData);
//     return response.data;
// };

// // DELETE
// export const deleteProduct = async (id) => {
//     const response = await axios.delete(`${API_URL}/${id}`);
//     return response.data;
// };
