import React from 'react';
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import {Checkbox} from "@mui/material";

const TodoCheckbox: React.FC<{ priorityId: number }> = ({priorityId}) => {
    return (
        priorityId === 1
            ?
            <Checkbox
                icon={<CircleTwoToneIcon/>}
                checkedIcon={<CheckCircleTwoToneIcon/>}
                sx={{
                    color: '#FF0000',
                    '&.Mui-checked': {
                        color: '#FF0000',
                    },
                }}
            />
            : priorityId === 2
                ?
                <Checkbox
                    icon={<CircleTwoToneIcon className={'text-yellow-500'}/>}
                    checkedIcon={<CheckCircleTwoToneIcon className={'text-yellow-500'}/>}
                    sx={{
                        color: '#ffea00',
                        '&.Mui-checked': {
                            color: '#ffea00',
                        },
                    }}
                />
                :
                <Checkbox
                    icon={<CircleTwoToneIcon className={'text-gray-500'}/>}
                    checkedIcon={<CheckCircleTwoToneIcon className={'text-gray-500'}/>}
                    sx={{
                        color: '#CBCBCB',
                        '&.Mui-checked': {
                            color: '#CBCBCB',
                        },
                    }}
                />
    )
};

export default TodoCheckbox;