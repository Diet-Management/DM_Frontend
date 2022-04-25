import axios from 'axios';

export const API = axios.create({
	baseURL: 'http://10.53.68.150:8081',
	headers: { 'Content-Type': 'application/json' },
});