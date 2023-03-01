import React from 'react';
import {FormControl} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AddBoxIcon from '@mui/icons-material/AddBox';
interface IItemSelect {
    options: {name: string | number; id?: number}[];
    disableUnderline?: boolean;
    item?: string;
    setItem?(e: SelectChangeEvent): void;
    className?: string;
}

const ItemSelect: React.FC<IItemSelect> = ({disableUnderline, item, setItem, options, className}) => {
    return (
        <div className={className}>
            <FormControl variant="standard" sx={{m: 0.5, width: '95%'}}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={item}
                    label={"Language"}
                    onChange={setItem}
                    disableUnderline={disableUnderline}
                >
                    {
                        options.map((el, index) =>
                            <MenuItem key={el.id || index} value={el.name} sx={{display: 'flex', justifyItems: 'center'}}>
                                {el.id === -1 && <AddBoxIcon sx={{mr: 0.5, opacity: '90%'}}/>}
                                {el.name}
                            </MenuItem>
                        )
                    }
                </Select>
            </FormControl>
        </div>
    );
};

export default ItemSelect;