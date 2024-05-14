import { type } from "@testing-library/user-event/dist/type";
import { getValue } from "@testing-library/user-event/dist/utils";

export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const MEMORY_ADD = "MEMORY_ADD"
export const ZERO_ADD = "ZERO_ADD"

export const TOTAL_ADD = "TOTAL_ADD"
export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

//change_operation oluşturucu
export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
}
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
}
export const memoryAdd = (value) => {
  return { type: MEMORY_ADD, payload: value };
}
export const totalAdd = (value) => {
  return { type: TOTAL_ADD, payload: value };
}
export const zeroAdd = (value) => {
  return { type: ZERO_ADD, payload: value };
}