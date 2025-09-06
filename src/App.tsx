import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Drawer,
    List,
    IconButton,
    Badge,
    Tooltip,
    Menu,
    MenuItem
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import Container from "@mui/material/Container";
import { Notifications } from "@mui/icons-material";
import { useState } from "react";
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import { Link } from "react-router-dom"; // Import Router and Routes


function App() {
    //const [mobileOpen, setMobileOpen] = useState(false);
    // const handleDrawerToggle = () => {
    //     setMobileOpen((prevState) => !prevState);
    // };
    // const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(event.currentTarget);
    // };
    // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    // const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorElNav(null);
    // };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    //const data: RegistrationViewModel = { RegistrationNo: 1, FirstName: true };
    return (
        <>
        
            <CssBaseline />
            <Container maxWidth={false}>
                <Box
                    sx={{
                        display: "flex",
                    }}
                >
                    {/* Header */}
                    <AppBar sx={{ bgcolor: "#dc3545", }} position="fixed">
                        <Toolbar>

                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                //onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6">{"{{logo}}"}</Typography>

                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                >
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <Notifications />
                                    </Badge>
                                </IconButton>
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton
                                        size="large"
                                        color="inherit"
                                        //onClick={handleOpenUserMenu}
                                        sx={{ p: 0 }}
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: "45px" }}
                                    id="menu-appbar"
                                    //anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right",
                                    }}
                                    open={Boolean(true)}
                                    //onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} 
                                        //onClick={handleCloseUserMenu}
                                        >
                                            <Typography sx={{ textAlign: "center" }}>
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </AppBar>

                    {/* Sidebar */}
                    <Drawer
                        sx={{
                            width: 240,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: 240,
                                boxSizing: "border-box",
                            },
                        }}
                        open={mobileOpen}
                        //variant="permanent"
                        //onClose={handleDrawerToggle}
                        anchor="left"
                    >
                        <List>
                            <Link to="/contact">
                                Home
                            </Link><br/><br/>
                            <Link to="/mod/averstisement/1/1">
                                Advt
                            </Link><br/><br/>
                            <Link to="/post">
                                post
                            </Link>
                        </List>
                    </Drawer>

                    {/* Main Content Area */}
                    
                </Box>
                
                
            </Container>
        </>
    );
}

export default App;
