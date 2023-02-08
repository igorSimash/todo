import { Dispatch } from "redux"
import {ILanguageAction} from "../../types/language";
import axios, { AxiosResponse } from "axios";
import {changeLanguageAction} from "../reducer/LanguageReducer";

export const getUserLanguage = ():any => {
    return async (dispatch: Dispatch<ILanguageAction>) => {
        await axios.get(process.env.REACT_APP_API_TODO as string, {withCredentials: true})
            .then((res: AxiosResponse) => {
                dispatch(changeLanguageAction(res.data.language));
            })


    }
}