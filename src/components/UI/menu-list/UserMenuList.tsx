import React from 'react';
import {Avatar, Divider, ListItemIcon, Menu, MenuItem} from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const UserMenuList:React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const {t} = useTranslation('todos');

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        fetch(process.env.REACT_APP_API_LOGOUT as string,
            {
                credentials: 'include'
            })
            .then((res) => {
                if (res.status === 200) {
                    navigate("/login");
                }
            })
    };

    return (
        <div className={'flex items-center'}>
            <Avatar onClick={handleClick} className={'cursor-pointer'}/>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar/> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={() => navigate('/todos/change-pass')}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    {t('changePassword', {ns: 'todos'})}
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    {t('logout', {ns: 'todos'})}
                </MenuItem>
            </Menu>
        </div>
    );
};

export default UserMenuList;