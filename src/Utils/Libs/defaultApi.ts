import axios from 'axios';

export const API = axios.create({
	baseURL: 'http://10.53.68.193:8081',
	headers: { 'Content-Type': 'application/json' },
});