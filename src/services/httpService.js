import axios from "axios";

axios.defaults.baseURL = "http://localhost:80/igunz-api/index.php";

export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
};
