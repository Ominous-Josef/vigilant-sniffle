import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, AppRootState } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppRootState>();
