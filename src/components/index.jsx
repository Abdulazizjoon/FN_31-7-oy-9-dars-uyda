import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import PersonIcon from "@mui/icons-material/Person";
import FeedIcon from "@mui/icons-material/Feed";
import LockIcon from "@mui/icons-material/Lock";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddCardIcon from "@mui/icons-material/AddCard";
import CampaignIcon from "@mui/icons-material/Campaign";
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from "@mui/icons-material/Settings";
import profile from '../img/profile.png'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  TextField,
  IconButton,
  Badge,
  Breadcrumbs,
  Link,
} from "@mui/material";
import {
  Home,
  AccountCircle,
  Settings,
  Notifications,
  Menu,
} from "@mui/icons-material";

function Figma() {
  return (
    <Box
      sx={{
        bgcolor: "#F0F2F5",
        height:'105vh',
        color: "#344767",
        pt: "40px",
        pb: "99px",
        pl: "298px",
        pr: "24px",
      }}
    >
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "#555",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Breadcrumbs>
              <Box>
                <Home fontSize="small" />
              </Box>
              <Box>Pages</Box>
              <Box>Account</Box>
              <Box>Settings</Box>
            </Breadcrumbs>
            <Box sx={{ display: "flex", alignItems: "center", gap: "192px" }}>
              <Box fontSize={30}>Settings</Box>
              <ReorderIcon />
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search here"
              sx={{ width: 200 }}
            />
            <AccountCircle />
            <Settings />
            <Notifications />
            <Menu />
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2 }}>
        <Tabs
          value={0}
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            padding: 0.5,
            width: "fit-content",
          }}
        >
          <Tab label="Messages" />
          <Tab label="Social" />
          <Tab label="Notifications" />
          <Tab label="Backup" />
        </Tabs>
      </Box>
      <Box sx={{ mt: "32px", display: "flex" }}>
        <Box
          sx={{
            pt: "24px",
            pb: "25px",
            pl: "32px",
            pr: "32px",
            bgcolor: "white",
            width: "502px",
            boxShadow: 5,
            borderRadius: "8px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <PersonIcon />
            Profile
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <FeedIcon />
            Basic Info
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <LockIcon />
            Change Password
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <AdminPanelSettingsIcon />
            2FA
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <AddCardIcon />
            Accounts
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <CampaignIcon />
            Notifications
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <SettingsIcon />
            Sessions
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              mt: "25px",
            }}
          >
            <DeleteIcon />
            Delete Account
          </Box>
        </Box>
        <Box
          sx={{
            ml: "24px",
            height: "112px",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              // width: "952px",
              boxShadow: 5,
              borderRadius: "12px",
              pt: "15px",
              pl: "16px",
              pb: "21px",
              display: "flex",
              gap: "24px",
            }}
          >
            <img src={profile} alt="" />
            <Box sx={{ mt: "15px" }}>
              <Box sx={{ fontSize: "20px" }}>Richard Davis</Box>
              <Box>CEO / Co-Founder</Box>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "white",
              mt: 2,
              borderRadius: "12px",
              p: 3,
              boxShadow: 3,
            }}
          >
            <Box sx={{ fontSize: "18px", fontWeight: "bold", mb: 2 }}>
              Basic Info
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <TextField label="First Name" sx={{ width: "49%" }} />
              <TextField label="Last Name" sx={{ width: "49%" }} />
              <TextField label="Gender" sx={{ width: "49%" }} />
              <TextField label="Birth Date" sx={{ width: "49%" }} />
              <TextField label="Email" sx={{ width: "49%" }} />
              <TextField label="Confirm Email" sx={{ width: "49%" }} />
              <TextField label="Location" sx={{ width: "49%" }} />
              <TextField label="Phone Number" sx={{width:'49%'}} />
              <TextField label="Language" sx={{width:'40%'}} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Figma;
