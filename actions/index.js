import axios from 'axios';
import Cookies from 'js-cookie';

export const getSecretInfo = async () => {
    return await axios.get('/api/v1/secret', { headers: {'authorization': `Bearer ${Cookies.getJSON('jwt')}`}} ).then(response => response.data);
};