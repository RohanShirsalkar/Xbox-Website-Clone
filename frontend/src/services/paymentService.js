import axios from "axios";
import { axiosInstance } from "../config/axiosConfig";

const paymentService = {

    // 
    // expexts order amount
    // 
    createOrder: async (amount) => {
        const response = await axiosInstance.post("/payment/process", { amount });
        return response.data;
    },

    // 
    // expexts response payment data given by razorpay  
    // razorpay_payment_id, razorpay_order_id, razorpay_signature
    // 
    verifyPayment: async (data) => {
        return await axiosInstance.post("/payment/verify", data);
    }
}

export default paymentService;