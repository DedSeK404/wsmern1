import {
    FAILD,

  GETALLPRODCUTSSUCCESS,
  GETONEPRODCUTSSUCCESS,
  LOADING,
} from "../actiontypes/producttypes";
import axios from "axios";

/**
 * @route get /product/
 * @description get all products
 * @access public
 */
export const getallproducts = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const { data } = await axios.get("/product");
    dispatch({ type: GETALLPRODCUTSSUCCESS, payload: data.products });
  } catch (error) {
    dispatch({ type: FAILD, payload: error });
  }
};
 /**
 * @route get /product/:idprod
 * @description get one product
 * @access public
 */
 export const getoneproduct = (idprod) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const { data } = await axios.get(`/product/${idprod}`);
      dispatch({ type: GETONEPRODCUTSSUCCESS, payload: data.product });
    } catch (error) {
      dispatch({ type: FAILD, payload: error });
    }
  };