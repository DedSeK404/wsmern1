import {
  ADDREVIEWSSUCCESS,
  DELETEREVIEW,
  EDITREVIEW,
  GETPRODUCTREVIEWSSUCCESS,
  RFAILD,
  RLOADING,
} from "../actiontypes/reviewtypes";
import axios from "axios";
import { FAILD, LOADING } from "../actiontypes/producttypes";
/**
 * @route get /review/:idprod
 * @description get product reviews
 * @access public
 */
export const getproductreviews = (idprod) => async (dispatch) => {
  dispatch({ type: RLOADING });
  try {
    const { data } = await axios.get(`/review/${idprod}`);
    dispatch({ type: GETPRODUCTREVIEWSSUCCESS, payload: data.reviews });
  } catch (error) {
    console.log(error);
    dispatch({ type: RFAILD, payload: error });
  }
};
/**
/**
 * @route POST /review/add/:idprod
 * @description add new review
 * @access public
 */

export const addreview = (idprod, newreview) => async (dispatch) => {
  dispatch({ type: RLOADING });
  try {
    const { data } = await axios.post(`/review/add/${idprod}`, newreview);
    dispatch({ type: ADDREVIEWSSUCCESS });
    dispatch(getproductreviews(idprod));
  } catch (error) {
    console.log(error);
    dispatch({ type: RFAILD, payload: error });
  }
};

/**
 * @route delete /review/:idreview
 * @description delete product review
 * @access public
 */

export const deleteReview = (idreview) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({ type: DELETEREVIEW, payload: idreview });
    const deleteReview = await axios.delete(`/review/${idreview}`);
  } catch (error) {
    dispatch({ type: FAILD, payload: error });
  }
};

/**
 * @route patch /review/:idreview
 * @description edit product review
 * @access public
 */
export const editreview = (editRevData, idprod) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({ type: EDITREVIEW, payload: editRevData });
    const patchProduct = await axios.patch(`/review/${idprod}`, {
      ...editRevData,
    });
  } catch (error) {
    dispatch({ type: FAILD, payload: error });
  }
};
