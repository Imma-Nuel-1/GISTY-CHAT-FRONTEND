import api from "./axiosConfig";

// User Registration
export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
  profilePic?: string;
}): Promise<any> => {
  try {
    const response = await api.post("/api/users/register", userData); // Use 'api' instance here
    return response.data;
  } catch (error) {
    throw error;
  }
};

// User Login
export const loginUser = async (
  email: string,
  password: string
): Promise<any> => {
  try {
    const response = await api.post("/api/users/login", { email, password }); // Use 'api' instance here
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get User by ID
export const getUserById = async (id: string): Promise<any> => {
  try {
    const response = await api.get(`/api/users/${id}`); // Use 'api' instance here
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update User by ID
export const updateUserById = async (
  id: string,
  userData: any
): Promise<any> => {
  try {
    const response = await api.put(`/api/users/${id}`, userData); // Use 'api' instance here
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete User by ID
export const deleteUserById = async (id: string): Promise<any> => {
  try {
    const response = await api.delete(`/api/users/${id}`); // Use 'api' instance here
    return response.data;
  } catch (error) {
    throw error;
  }
};
