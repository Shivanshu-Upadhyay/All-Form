import physiomaticApi from "./physiomaticApi";
import { ADD_ANTINATAL_DATA, ERROR } from "./types";

export const addAntiNatalData = (AntiNatalData) => async (dispatch) => {
  try {
    const response = await physiomaticApi.post("/api/anti/add", AntiNatalData);
    dispatch({
      type: ADD_ANTINATAL_DATA,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response.data,
    });
  }
};