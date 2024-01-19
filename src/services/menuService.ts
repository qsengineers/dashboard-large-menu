import axios from "axios";
import { IMenuItem } from "../model";

const API_PATH = `${process.env.REACT_APP_API_PATH}`;
export const getMenu = () => {
  return axios.get<IMenuItem[]>(API_PATH);
};
