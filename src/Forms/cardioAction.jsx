import physiomaticApi from "./physiomaticApi";
import { ADD_CARDIOEXAM_DATA, ERROR } from "./types";

export const addCardioExamData = (CardioExamData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post("/api/cardio/add", CardioExamData);
    dispatch({
      type: ADD_CARDIOEXAM_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};