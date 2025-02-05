import * as React from 'react';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';


const SideMenu: React.FC = () => {

    return (
        <>
            <List component="nav">
                <ListItemButton component="a" href="/">
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="menu1" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="menu2" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <BarChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="menu3" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    <LayersIcon />
                    </ListItemIcon>
                    <ListItemText primary="menu4" />
                </ListItemButton>
            </List>
        </>
    );
};
export default SideMenu;