import axios from "axios";

const API_BASE_URL = "https://devmvtech.online/api";

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

export const getAllCampaigns = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/campaign`);
    return response.data;
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

export const getCampaignById = async ({ id }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/campaign/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllWorks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/work`);
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
