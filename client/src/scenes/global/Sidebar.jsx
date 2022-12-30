import React, {useState} from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import {Menu, MenuItem} from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

// Creating a separate component here
// const Item = ({ title, to, icon, selected, setSelected }) => {
//     const theme = useTheme();
//     const colors = tokens(theme.palette.mode);
//     return (
//       <MenuItem
//         active={selected === title}
//         style={{
//           color: colors.grey[100],
//         }}
//         onClick={() => setSelected(title)}
//         icon={icon}
//       >
//         <Typography>{title}</Typography>
//         <Link to={to} />
//       </MenuItem>
//     );
//   };


const Sidebar = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    const navigate = useNavigate();

    // const handleNavigate = (e) => {
    //   e.preventDefault();
    //   console.log("Made it to handle navigate");
    //   navigate("/team");
    // }

    return (
        <Box 
        sx={{
            // "& .pro-sidebar-inner": {background: `${colors.primary[400]} !important`},
            // "& .MuiBox-root": {background: `${colors.primary[400]} !important`},
            // "& .ps-menuitem-root": {background: `${colors.primary[400]} !important`},
            "& .ps-menu-root": {background: `${colors.primary[400]} !important`},
            // "& .pro-icon-wrapper": {backgroundColor: "transparent !important"},
            // "& .ps-menuitem-root": {backgroundColor: "transparent !important"},
            "& .MuiBox-root": {padding: "5px 10px 5px 10px !important"},
            "& .ps-menu-button:hover": {color: "rgba(20, 27, 45, 1) !important"} ,
            // "& .MuiSvgIcon-root:hover": {color: "#868dfb !important"} ,
            // "& .pro-menu-item.active": { color: "#6870fa !important"},
            "& .ps-active > a": { color: "rgba(20, 27, 45, 1) !important"},
            // "& .ps-menu-button.active": { color: "#6870fa !important"},
            "& .MuiSvgIcon-root.ps-active": { color: "rgba(20, 27, 45, 1) !important"},
        }}
        >
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {/* What happens when its not collapsed */}
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h3" color={colors.grey[100]}>ADMINS</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img alt="profile-user" width="100px" height="100px" src={`../../assets/user.jpg`} style={{ cursor: "pointer", borderRadius: "50%" }}/>
                </Box>
                <Box textAlign="center">
                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                        Ricky Dhanota
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                        CEO Fancy Admin
                    </Typography>
                </Box>

                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    {/* <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Dashboard"} style={{color: colors.grey[100],}} onClick={() => setSelected("Dashboard")} icon={<HomeOutlinedIcon />}>
                      <Typography onClick={() => navigate("/")}>Dashboard</Typography>
                    </MenuItem>

                    <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Data</Typography>

                    {/* <Item title="Manage Team" to="/team" icon={<PeopleOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Manage Team"} style={{color: colors.grey[100],}} onClick={() => setSelected("Manage Team")} icon={<PeopleOutlineOutlinedIcon />}>
                      <Typography onClick={() => navigate("/team")}>Manage Team</Typography>
                    </MenuItem>

                    {/* <Item title="Contacts Information" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Contacts Information"} style={{color: colors.grey[100],}} onClick={() => setSelected("Contacts Information")} icon={<ContactsOutlinedIcon />}>
                      <Typography onClick={() => navigate("/contacts")}>Contacts Information</Typography>
                    </MenuItem>

                    {/* <Item title="Invoices Balances" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Invoices Balances"} style={{color: colors.grey[100],}} onClick={() => setSelected("Invoices Balances")} icon={<ReceiptOutlinedIcon />}>
                      <Typography onClick={() => navigate("/invoices")}>Invoices Balances</Typography>
                    </MenuItem>

                    <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Pages</Typography>

                    {/* <Item title="Profile Form" to="/form" icon={<PersonOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Profile Form"} style={{color: colors.grey[100],}} onClick={() => setSelected("Profile Form")} icon={<PersonOutlineOutlinedIcon />}>
                      <Typography onClick={() => navigate("/form")}>Profile Form</Typography>
                    </MenuItem>

                    {/* <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Calendar"} style={{color: colors.grey[100],}} onClick={() => setSelected("Calendar")} icon={<CalendarTodayOutlinedIcon />}>
                      <Typography onClick={() => navigate("/calendar")}>Calendar</Typography>
                    </MenuItem>

                    {/* <Item title="FAQ Page" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "FAQ Page"} style={{color: colors.grey[100],}} onClick={() => setSelected("FAQ Page")} icon={<HelpOutlineOutlinedIcon />}>
                      <Typography onClick={() => navigate("/faq")}>FAQ Page</Typography>
                    </MenuItem>

                    <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }}>Charts</Typography>

                    {/* <Item title="Bar Chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Bar Chart"} style={{color: colors.grey[100],}} onClick={() => setSelected("Bar Chart")} icon={<BarChartOutlinedIcon />}>
                      <Typography onClick={() => navigate("/bar")}>Bar Chart</Typography>
                    </MenuItem>

                    {/* <Item title="Pie Chart" to="/pie" icon={<PieChartOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Pie Chart"} style={{color: colors.grey[100],}} onClick={() => setSelected("Pie Chart")} icon={<PieChartOutlinedIcon />}>
                      <Typography onClick={() => navigate("/pie")}>Pie Chart</Typography>
                    </MenuItem>

                    {/* <Item title="Line Chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Line Chart"} style={{color: colors.grey[100],}} onClick={() => setSelected("Line Chart")} icon={<TimelineOutlinedIcon />}>
                      <Typography onClick={() => navigate("/line")}>Line Chart</Typography>
                    </MenuItem>

                    {/* <Item title="Geography Chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected}/> */}
                    <MenuItem active={selected === "Geography Chart"} style={{color: colors.grey[100],}} onClick={() => setSelected("Geography Chart")} icon={<MapOutlinedIcon />}>
                      <Typography onClick={() => navigate("/geography")}>Geography Chart</Typography>
                    </MenuItem>
                </Box>

            </Box>
          )}
        </Menu>
      </ProSidebarProvider>
    </Box>
    );
};

export default Sidebar;