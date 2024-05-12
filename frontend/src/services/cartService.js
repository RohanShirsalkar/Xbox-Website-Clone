import axios from "axios";
import { axiosInstance } from "../config/axiosConfig";

const cartService = {

    // 
    // Create a new cart
    // Expects a body with userId, products, cartTotal, productsQty, orderId
    // 
    create: async (cartData) => {
        const response = await axiosInstance.post("/cart", cartData);
        return response.data;
    },

    // 
    // Find all carts
    // Expects nothing
    // 
    findAll: async () => {
        const response = await axiosInstance.get("/cart");
        return response.data;
    },

    // 
    // Find cart by ID
    // Expects a cart ID
    // 
    findById: async (cartId) => {
        const response = await axiosInstance.get(`/cart/${cartId}`);
        return response.data;
    },

    // 
    // Update cart by ID
    // Expects a cart ID and a body with updated products and orderId
    // 
    updateById: async (cartId, updatedData) => {
        const response = await axiosInstance.put(`/cart/${cartId}`, updatedData);
        return response.data;
    }
}

export default cartService;
