import { api } from "../api-service/AxiosConfig";
import { StatusEnum } from "../enums/status";

export const TodosAPI = {
  get: async () => {
    const response = await api.get(`/todos`);
    return response.data;
  },

  put: async (id: string) => {
    const response = await api.put(`/todos/${id}`);
    return response.data;
  },
  post: async (data: { title: string; status: StatusEnum }) => {
    const response = await api.post(`/todos`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
  },

  getName: async () => {
    const response = await api.get(`/todos/name`);
    return response.data;
  },
};
