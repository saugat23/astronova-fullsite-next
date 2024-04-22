import axios from 'axios';

const API_BASE_URL = 'https://final-backend-astronova.vercel.app/api';

export const getAllDonors = async ({ offset, limit, role }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/get-all-user?page=${offset}&pageSize=${limit}&role=${role}`);
        return response.data.users;
      } catch (error) { 
        throw error;
      }
};

export const getAllCampaign = async () => {
  try {
      const response = await axios.get(`${API_BASE_URL}/campaign/allCampaign`);
      return response.data.campaigns;
    } catch (error) { 
      throw error;
    }
};

export const createCampaign = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/campaign/campaignCreate`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/event/allEvents`)
    return response.data;
  } catch (error) {
    throw error;
  }
}