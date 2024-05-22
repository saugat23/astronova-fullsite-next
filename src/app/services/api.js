import axios from "axios";

const API_BASE_URL = "https://devmvtech.online/api";

export const getAllDonors = async ({ offset, limit, role }) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/user/get-all-user?page=${offset}&pageSize=${limit}&role=${role}`,
    );
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

export const createCampaign = async (campaignData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/campaign`,
      campaignData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/event/allEvents`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTestimonial = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/testimonial/testimonialCreate`,
      userData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCampaignById = async ({ id }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/campaign/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginCoordinator = async (coordinatorData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/auth/login`,
      coordinatorData,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createWork = async (workData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/work`,
      workData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
