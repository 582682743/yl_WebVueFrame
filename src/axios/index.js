import axios from 'axios';

import { baseURL } from '@/config';
import { request, response } from './interceptors';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(request);
instance.interceptors.response.use(response);

export default instance;
