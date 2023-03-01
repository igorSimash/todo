import React from 'react';
import {useDispatch} from "react-redux";
import {changeLanguageAction} from "../../../redux/reducer/LanguageReducer";
import {useTypedSelector} from "../../../hooks/useTypedSelect";
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FormControl} from "@mui/material";

const languages: ({ title: string; value: string })[] = [
    {
        value: 'en-US',
        title: "English"
    },
    {
        value: 'uk-UA',
        title: "Ukrainian - Українська"
    },
    {
        value: 'pl-PL',
        title: "Polish - Polski"
    }
];

interface ILangSelectProps {
    changeInDB?: boolean;
    className?: string;
    disableUnderline?: boolean;
    textAlign?: string;
}

const LanguageSelect: React.FC<ILangSelectProps> = ({changeInDB = false, className, disableUnderline, textAlign = 'start'}) => {
    const dispatch = useDispatch();
    const language = useTypedSelector(state => state.language.language);
    const handleChange = async (e: SelectChangeEvent) => {
        dispatch(changeLanguageAction(e.target.value));
        if (changeInDB) {
            await fetch(process.env.REACT_APP_API_USER_LANGUAGE as string, {
                credentials: 'include',
                mode: 'cors',
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({language: e.target.value})
            });
        }
    };

    return (
        <div className={'flex items-center'}>
            <FormControl className={'focus:bg-white'} variant="standard" sx={{m: 1, width: 145, textAlign}}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={language}
                    label={"Language"}
                    onChange={handleChange}
                    disableUnderline={disableUnderline}
                >
                    {
                        languages.map((language, index) =>
                            <MenuItem key={index} value={language.value}>
                                {language.title}
                            </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default LanguageSelect;