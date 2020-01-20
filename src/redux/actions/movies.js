import { RATE } from "../types";

export const rate = (id, value) => ({
  type: RATE,
  payload: {
    id,
    value
  }
});
