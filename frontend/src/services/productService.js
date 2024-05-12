import { axiosInstance } from "../config/axiosConfig";

const productService = {

    // 
    // Create a new product
    // Expects a body with productType, title_1, title_2, description_1, description_2, description_3, price
    // 
    create: async (productData) => {
        const response = await axiosInstance.post("/product", productData);
        return response.data;
    },

    // 
    // Find all products
    // Expects nothing
    // 
    findAll: async () => {
        const response = await axiosInstance.get("/product");
        return response.data;
    },

    // 
    // Find product by ID
    // Expects a product ID
    // 
    findById: async (productId) => {
        const response = await axiosInstance.get(`/product/${productId}`);
        return response.data;
    }
}

export default productService;
