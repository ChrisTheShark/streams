import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const newState = _.mapKeys(action.payload, "id");
      return { ...state, ...newState };

    case DELETE_STREAM:
      return _.omit(state, action.payload.id);

    case CREATE_STREAM:
    case EDIT_STREAM:
    case FETCH_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    default:
      return state;
  }
};
