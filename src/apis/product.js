import axios from "axios";

const show = slug => axios.get(`products/${slug}`);

const fetch = params => axios.get("products", { params }); //Here params are "query parameters" (those which are written after '?')

const productsApi = { show, fetch };
export default productsApi;
