import { axiosInstance } from "../config/axiosConfig";

const orderService = {

    // 
    // Create a new order
    // Expects a body with userId, cartId, shippingAddress
    // 
    create: async (orderData) => {
        const response = await axiosInstance.post("/order", orderData);
        return response.data;
    },

    // 
    // Find all orders
    // Expects nothing
    // 
    findAll: async () => {
        const response = await axiosInstance.get("/order");
        return response.data;
    },

    // 
    // Find order by ID
    // Expects an order ID
    // 
    findById: async (orderId) => {
        const response = await axiosInstance.get(`/order/${orderId}`);
        return response.data;
    },

    // 
    // Update order by ID
    // Expects an order ID and a body with updated products, shippingAddress, paymentMode
    // 
    updateById: async (orderId, updatedData) => {
        const response = await axiosInstance.put(`/order/${orderId}`, updatedData);
        return response.data;
    }
}

export default orderService;
