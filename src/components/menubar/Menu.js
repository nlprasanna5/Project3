import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from "./menuBar.module.css"

export default function BasicMenu({ menuItems, label }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <p className={style.menuBarContentBottomP}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {label}
            </p>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuItems && menuItems.map((item) =>
                    <MenuItem sx={{ width: "18rem" }} onClick={handleClose}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "spaceAround" }}>
                            {item.icon}
                            {item.text}
                        </div>
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
}