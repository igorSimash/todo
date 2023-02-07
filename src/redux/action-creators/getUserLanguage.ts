import { Dispatch } from "redux"
import {ILanguageAction} from "../../types/language";
import axios from "axios";
import {changeLanguageAction} from "../reducer/LanguageReducer";

export const getUserLanguage = ():any => {
    return async (dispatch: Dispatch<ILanguageAction>) => {
        const res = await axios.get(process.env.REACT_APP_API_TODO as string, {withCredentials: true});
        dispatch(changeLanguageAction(res.data.language))
    }
}