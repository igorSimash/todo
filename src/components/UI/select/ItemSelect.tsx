import React from 'react';
import {FormControl} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

interface IItemSelect {
    options: {name: string | number; id?: number}[];
    disableUnderline?: boolean;
    item?: string;
    setItem?(e: SelectChangeEvent): void;
}

const ItemSelect: React.FC<IItemSelect> = ({disableUnderline, item, setItem, options}) => {
    return (
        <div className={''}>
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
                            <MenuItem key={el.id || index} value={el.name}>
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