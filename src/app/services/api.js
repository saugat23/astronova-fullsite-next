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

export const updateCampaign = async (id, campaignData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.put(
      `${API_BASE_URL}/v1/campaign/${id}`,
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

export const deleteCampaign = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/campaign/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getWorkById = async ({ id }) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/work/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateWork = async (id, workData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.put(
      `${API_BASE_URL}/v1/work/${id}`,
      workData,
      config,
    );
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

export const deleteWork = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/work/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTestimonial = async (testimonialData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/testimonial`,
      testimonialData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/testimonial/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/blog`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/blog/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBlog = async (blogData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/blog`,
      blogData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBlog = async (id, blogData) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.put(
      `${API_BASE_URL}/v1/blog/${id}`,
      blogData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/blog/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNews = async (newsData) => {
  const config = {
    header: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/news`,
      newsData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/news`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/news/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNews = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/news/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEvent = async (eventData) => {
  const config = {
    header: {
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const response = await axios.post(
      `${API_BASE_URL}/v1/event`,
      eventData,
      config,
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/v1/event`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/event/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
