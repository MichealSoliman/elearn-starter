import axios from 'axios';
const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' });

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);
export const getMe = (token) => API.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } });
export const listCourses = () => API.get('/courses');
export const getCourse = (id) => API.get(`/courses/${id}`);
export default API;
