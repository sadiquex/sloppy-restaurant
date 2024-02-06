"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { MAIN } from "@/app/_ui/styles/uiContainers";
import Link from "next/link";

export const navItems = [
  {
    name: "Home",
    link: "home",
  },
  {
    name: "About",
    link: "about",
  },
  {
    name: "Our Menu",
    link: "menu",
  },
  {
    name: "Gallery",
    link: "gallery",
  },
  {
    name: "Review",
    link: "review",
  },
  {
    name: "Team",
    link: "team",
  },
  {
    name: "Blog",
    link: "blog",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <MAIN>
      <Box>
        {/* navbar */}
        <AppBar
          component="nav"
          elevation={0} // box shadow
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#fff",
            position: "fixed",
            fontFamily: "Inter",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          {/* navbar */}
          <Toolbar
            sx={{
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            {/* logo */}
            <Box
              component="div"
              sx={{
                flexGrow: 1,
                display: { sm: "block" },
              }}
            >
              {/* <Logo /> */}
              <img src={"/assets/images/sloppy-logo.png"} alt="SloppyLogo" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Link href={`#${item.link}`} key={item.name}>
                  <Button
                    sx={{
                      color: "#000",
                      textTransform: "none",
                      fontSize: 16,
                      "&:hover": {
                        color: "hsl(5, 85%, 63%)",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </Box>
            {/* hamburger - on mobile */}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { sm: "none" },
              }}
            >
              {/* <OpenMenuIcon /> */}
              OPEN
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* mobile navbar - drawer */}
        <nav>
          <Drawer
            // container={container}
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              // transformOrigin: "right",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: 280,
              },
            }}
          >
            <MobileNav />
          </Drawer>
        </nav>
      </Box>
    </MAIN>
  );
}
