import Axios from "axios";

Axios.defaults.baseURL = 'https://vitl-static-api.s3-eu-west-1.amazonaws.com/';
// Long response timeout
Axios.defaults.timeout = 2000;

export default Axios;