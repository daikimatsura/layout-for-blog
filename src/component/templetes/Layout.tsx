import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import theme from '../../style/theme';
import SideMenu from './SideMenu';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-react';
import { dict } from '../../locales/auth-ja';
I18n.putVocabularies(translations);
I18n.setLanguage('ja');

I18n.putVocabularies({ ...dict });

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

type LayoutProps = {
    title: string;
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({title, children}) => {
  // サイドメニュー開閉状態
  const [open, setOpen] = React.useState(true);
  // サイドメニュー開閉処理
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <ThemeProvider theme={theme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open}>{/* ヘッダー部分の実装 */}
              <Toolbar
                sx={{
                  pr: '24px', // keep right padding when drawer closed
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                  }}
                >
                  <MenuIcon />{/* サイドメニューを開閉できるボタン */}
                </IconButton>
                <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1 }}
                >
                  {title}
                </Typography>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />{/* 通知ボタン */}
                  </Badge>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <Toolbar
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  px: [1],
                }}
              >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />{/* サイドメニューを開閉できるボタン */}
                </IconButton>
              </Toolbar>
              <Divider />
              <SideMenu /> {/* サイドメニュー */}
            </Drawer>
            <Box
              component="main"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Toolbar />
              <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {children}
                <Box mt={4}>
                    <Typography variant="body2" color="text.secondary" align="center" > 
                        {'Copyright © my-app'} 
                        {new Date().getFullYear()} 
                        {'.'} 
                    </Typography>
                </Box>
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
    )}
    </Authenticator>
  );
};

export default Layout;