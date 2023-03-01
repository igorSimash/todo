import React from 'react';
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import {Checkbox} from "@mui/material";

interface ITodoCheckbox {
    priorityId: number;

    onClick?(): void;
    checked?: boolean;
}

const TodoCheckbox: React.FC<ITodoCheckbox> = ({priorityId, onClick, checked = false}) => {
    const color = priorityId === 1 ? '#FF0000' : priorityId === 2 ? '#EAB308' : '#CBCBCB'
    return (
        <Checkbox
            icon={<CircleTwoToneIcon className={`text-[${color}] `}/>}
            checkedIcon={<CheckCircleTwoToneIcon className={`text-[${color}]`}/>}
            sx={{
                color,
                '&.Mui-checked': {
                    color,
                },
            }}
            defaultChecked={checked}
            onClick={onClick}
        />
    )
};

export default TodoCheckbox;