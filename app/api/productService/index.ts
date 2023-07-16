import {productsApi} from '../apiConfig';

const getProductList = (page: number) => {
  return productsApi.get(`/recommend/items?page=${page}`);
};

const getProductById = (id: string) => {
  return productsApi.get(`/recommend/item/${id}`);
};

const authService = {
  getProductList,
  getProductById,
};

export default authService;
