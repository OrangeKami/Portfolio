import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightModeRounded";
import StickyNote2Icon from "@mui/icons-material/StickyNote2Rounded";
import AppBar from "@mui/material/AppBar";
import Button, { buttonClasses } from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles/CssVarsProvider";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { siteInfo } from "../constants/siteInfo";

const Header = () => {
  const { mode: paletteMode, setMode: setPaletteMode } = useColorScheme();
  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={scrollTrigger ? 4 : 0}
      role="banner"
      css={(theme) => ({
        background: scrollTrigger
          ? theme.vars.palette.background.paper
          : "transparent",
      })}
    >
      <Toolbar variant="dense" css={{ flexWrap: "wrap" }}>
        <div css={{ display: "flex", alignItems: "center" }}>
          <Typography
            color="textPrimary"
            variant="h6"
            component="h1"
            css={(theme) => ({ margin: theme.spacing(0, 0.5) })}
          >
            <Link to="/" title={siteInfo.shortTitle}>
              {siteInfo.firstName + " " + siteInfo.lastName}
            </Link>
          </Typography>
        </div>
        <div css={{ flexGrow: 3 }} />
        <nav >
          <Button
            css={(theme) => ({
              backgroundColor: theme.vars.palette.background.default,
              marginRight: theme.spacing(0.5),
              "&:hover": {
                backgroundColor: theme.vars.palette.background.default,
              },
              [theme.breakpoints.down("sm")]: {
                [`& .${buttonClasses.startIcon}`]: {
                  display: "none",
                },
              },
            })}
            variant="outlined"
            color="inherit"
            size="small"
            href={siteInfo.blog.url}
            target="_blank"
            title={siteInfo.blog.title}
            startIcon={<StickyNote2Icon />}
          >
            <>
            <span
              css={(theme) => ({
                display: "inline",
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              })}
            >
              {siteInfo.blog.title}
            </span>
            </>
          </Button>
          <Button
            css={(theme) => ({
              backgroundColor: theme.vars.palette.background.default,
              marginRight: theme.spacing(0.5),
              "&:hover": {
                backgroundColor: theme.vars.palette.background.default,
              },
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            })}
            variant="outlined"
            color="inherit"
            size="small"
            target="_blank"
            href={siteInfo.github.url}
            title={siteInfo.github.title}
            startIcon={<GitHubIcon />}
          >
            {siteInfo.github.title}
          </Button>
          <IconButton
            size="small"
            onClick={() => {
              setPaletteMode(paletteMode === "light" ? "dark" : "light");
            }}
            css={(theme) => ({ margin: theme.spacing(0, 1) })}
            title="LightMode"
          >
            {paletteMode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
