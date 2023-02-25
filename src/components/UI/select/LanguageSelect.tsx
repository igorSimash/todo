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

const LanguageSelect: React.FC = () => {
    const dispatch = useDispatch();
    const language = useTypedSelector(state => state.language.language);
    const handleChange = (e: SelectChangeEvent) => {
        dispatch(changeLanguageAction(e.target.value));
    };

    return (
        <div className={'flex items-center'}>
            <FormControl variant="standard" sx={{m: 1, width: 145}}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={language}
                    label={"Language"}
                    onChange={handleChange}
                >
                    {
                        languages.map((language, index) =>
                            <MenuItem key={index} value={language.value}>
                                {language.title}
                            </MenuItem>
                        )}
                </Select>
            </FormControl>
        </div>
    );
};

export default LanguageSelect;