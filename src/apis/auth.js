import axios from 'axios';

export const localLogin = ({ email, password }) => {
    axios.post('/api/auth/login/local', { email, password });
};