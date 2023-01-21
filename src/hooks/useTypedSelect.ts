import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../redux/store";

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector;