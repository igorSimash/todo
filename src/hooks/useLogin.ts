import {useNavigate} from "react-router-dom";
import axios, {AxiosResponse} from "axios";



export const useLogin = () => {
    const navigate = useNavigate();

    axios.get(
        process.env.REACT_APP_API_LOGIN as string,
        {
            withCredentials: true
        }
    )
        .then((res:AxiosResponse) => {
            if (res.status === 200) {
                navigate("/todos");
            }
        })
}