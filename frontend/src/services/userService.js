import { axiosInstance } from "../config/axiosConfig";

const userService = {

    // 
    // Register a new user
    // Expects a body with name, email, password
    // 
    register: async (userData) => {
        const response = await axiosInstance.post("/user/register", userData);
        return response.data;
    },

    // 
    // Login with user credentials
    // Expects a body with email, password
    // 
    login: async (credentials) => {
        const response = await axiosInstance.post("/user/login", credentials);
        return response.data;
    },

    // 
    // Find user by ID
    // Expects a user ID
    // 
    findById: async (userId) => {
        const response = await axiosInstance.get(`/user/${userId}`);
        return response.data;
    }
}

export default userService;
