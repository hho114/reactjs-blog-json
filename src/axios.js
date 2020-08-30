import axios from "axios";


//This is showcase that you can use diffrent API url for different components
const instance = axios.create(
{baseURL:'https://jsonplaceholder.typicode.com'}
);

instance.defaults.headers.common['Authorization']='AUTH TOKEN FROM INSTANCE';

export default instance;
