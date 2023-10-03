import * as React from 'react';

import { styled, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';

import MuiDrawer from '@mui/material/Drawer';

import List from '@mui/material/List';

import CssBaseline from '@mui/material/CssBaseline';

import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';

import ListItemText from '@mui/material/ListItemText';

import Topnav from '../components/TopNav';

import { Link, Outlet, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

import Accordion from '@mui/material/Accordion';

import AccordionDetails from '@mui/material/AccordionDetails';

import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 

import axios from 'axios';

 

const drawerWidth = 250;

 

const openedMixin = (theme) => ({

  width: drawerWidth,

  transition: theme.transitions.create('width', {

    easing: theme.transitions.easing.sharp,

    duration: theme.transitions.duration.enteringScreen,

  }),

  overflowX: 'hidden',

});

 

const closedMixin = (theme) => ({

  transition: theme.transitions.create('width', {

    easing: theme.transitions.easing.sharp,

    duration: theme.transitions.duration.leavingScreen,

  }),

  overflowX: 'hidden',

  width: `calc(${theme.spacing(7)} + 1px)`,

  [theme.breakpoints.up('sm')]: {

    width: `calc(${theme.spacing(8)} + 1px)`,

  },

});

 

const DrawerHeader = styled('div')(({ theme }) => ({

  display: 'flex',

  alignItems: 'center',

  justifyContent: 'flex-end',

  padding: theme.spacing(0, 1),

 

  ...theme.mixins.toolbar,

}));

 

const Drawer = styled(MuiDrawer, {

  shouldForwardProp: (prop) => prop !== 'open',

})(({ theme, open }) => ({

  width: drawerWidth,

  flexShrink: 0,

  whiteSpace: 'nowrap',

  boxSizing: 'border-box',

  ...(open && {

    ...openedMixin(theme),

    '& .MuiDrawer-paper': openedMixin(theme),

  }),

  ...(!open && {

    ...closedMixin(theme),

    '& .MuiDrawer-paper': closedMixin(theme),

  }),

}));

 

export default function MiniDrawer() {

  const [data, setData] = React.useState({});

  const loginUserID = localStorage.getItem('id');

 

  const navigate = useNavigate();

 

  React.useEffect(() => {

    const token = localStorage.getItem('token');

    if (!token) {

      navigate('/login');

    }else{

      axios

      .get(

        `${process.env.REACT_APP_URL}/sms/leave/employeedata?id=${loginUserID}`

      )

      .then((res) => {

        setData(res.data[0]);

      })

      .catch((err) => {

        console.log(err);

      });

    }

  }, []);

 

  const theme = useTheme();

  const [open, setOpen] = React.useState(true);

 

  const handleDrawerClose = () => {

    setOpen(false);

  };

  const handleDrawerOpen = () => {

    setOpen(true);

  };

  const [expanded, setExpanded] = React.useState('panel0');

  const handleChange = (panel) => (event, isExpanded) => {

    setExpanded(isExpanded ? panel : false);

  };

    return (

      <Box sx={{ display: 'flex' }}>

        <CssBaseline />

        <Topnav open={open} setOpen={setOpen} />

 

        <Drawer variant='permanent' open={open}>

          <DrawerHeader></DrawerHeader>

          <Divider />

          <List style={{ height: '100%' }}>

            {/* //////////////////////////////drawer open close button here //////////////////////////////////*/}

            <IconButton

              color='inherit'

              aria-label='open drawer'

              onClick={handleDrawerOpen}

              sx={{

                marginLeft: 1.5,

                ...(open && { display: 'none' }),

              }}

            >

              <MenuIcon />

            </IconButton>

            <IconButton

              onClick={handleDrawerClose}

              sx={{

                marginLeft: 25,

                ...(!open && { display: 'none' }),

              }}

            >

              {theme.direction === 'rtl' ? (

                <ChevronRightIcon />

              ) : (

                <ChevronLeftIcon />

              )}

            </IconButton>

           

            <Accordion

            expanded = {true}

            // expanded={expanded === 'panel1'}

            onChange={handleChange('panel1')}

          >

            <AccordionSummary

              // expandIcon={<ExpandMoreIcon />}

              aria-controls='panel1bh-content'

              id='panel1bh-header'

            >

              <img

                style={{ width: '30px', height: '30px' }}

                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADrklEQVR4nO2dTYhWZRTHf0qNA1GQ4EJtoIIQx4WNgYgGJangV5ju2ykEQaaBC6EGceVCCAZalBuhRbURBkQQIcUU/AJtEW5mWpYzpOZHfiQnHrghvPgyzvve+5z/vff84A8D78B7z//c55z3Pvd57oUgCIIgqB8LgBXASPF3kIFXgN3AJcA6dKn4LP1PUDILgVHgr2cY36m/ga+B1yML/fMOcBR4/BzGd+oJMA6siUTMjrnAVuBkD6Z3UypPHwMvRDK68zKwC7heovGdmgT2Aa9GIp6yaBb1vSxFn+izvltJal2fqKK+W/QJjfpu0Sc06rtFn9Co79a2PqFc363J1xOpvu8pfmNbSzRZxJxidyU11mkBQ8xJU8BOD+PnAN8IGGAiGis8ycYXAkGbmPbmMn8IuC8QsIkpebI4RwIOCgRrojqQIwFXBAI1UV3MkYC7AoGaqNIsa+V4B2niigQQCXA/Cy1GgL8RFiXI3wxzUPQAIgHuZ6HFCPA3wqIE+ZthDooeQCTA/Sy0GAH+RliUIH8zzEHRA4gEuJ+FFiPA3wiLEuRvhjkoegCRAPez0Jo8Ah4KBGmi+jdHAtq8FNFm0L0cCWjTIlybpdI+iMq5JhCoiWoiRwJ+EQjURHUhRwKOCwRqokreVM6YQKAmqvSMisr5VCBQE9UnORKwTiBQE9XaHAl4TSBQE1V6rE7lpK04twWCNTHdIiNN3opqPepEzgTsEwjY2rpH7P+d8N4Bm5iW594Vf0MgaBPRn7m3qSZ+EAjcRPQ9DuwQCNxE9KFHAgaiDJHM/wN4EScOC5x95qxDOLJMwABz1jDOnBUwwZx0BgE2CBhhTkoTkxKcETDDMiuNfBnaOEW9FjF+FjDFMukUgiwBHgiYYxXrocIvnzY/S2gUYeYBvwmYZBUpPfl3EHHeK9ZIWsP0GHiXmrBfwDArWekmVG1Ic+PHBEyzkjTuMd/fL/OB3wXMsxLWe9b2jRtvFXeLrKaaBpZSc1YCdwTMtB7W+q+mIayr2c6aR8BGGsYW4B8Bc20Gpav57TSU94tna5qo7gLraTirRPeZTRX9qhUMdXkhpznpKvAGLeMl4CcB838sjqWVzAE+d2rO6Ts/q+MVbhUMA5czmv9r7rWcdWAA+Kri0ZBesvBl8V1BF94sJr/KNn+8jY2236vn8yUYfw74wDuYOrMZON2D8WmRwCbvg28SI8B3xV6sbqbfBL4F3vY+2CYzCHwEHCnm6ieKxGwr7kkHQRAEAXXgPyhZ3MME+8X/AAAAAElFTkSuQmCC'

              />

 

              <ListItemIcon

                sx={{

                  minWidth: 0,

                  mr: open ? 3 : 'auto',

                  justifyContent: 'center',

                }}

              ></ListItemIcon>

 

              <ListItemText

                primary={'Leave Management'}

                sx={{ display: open ? 1 : 'none' }}

              />

            </AccordionSummary>

 

            <AccordionDetails>

              <ListItem disablePadding sx={{ display: 'block' }}>

                <Link

                  to='leavedashboard'

                  style={{ textDecoration: 'none', color: '#000000DE' }}

                >

                  <ListItemButton

                    sx={{

                      minHeight: 48,

                      justifyContent: open ? 'initial' : 'center',

                      px: 2.5,

                    }}

                  >

                    <ListItemIcon

                      sx={{

                        minWidth: 0,

                        mr: open ? 3 : 'auto',

                        justifyContent: 'center',

                      }}

                    ></ListItemIcon>

                    <ListItemText

                      primary='Dashboard'

                      sx={{ opacity: open ? 1 : 0 }}

                    />

                  </ListItemButton>

                </Link>

              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>

                <Link

                  to='applyleave'

                  style={{ textDecoration: 'none', color: '#000000DE' }}

                >

                  <ListItemButton

                    sx={{

                      minHeight: 48,

                      justifyContent: open ? 'initial' : 'center',

                      px: 2.5,

                    }}

                  >

                    <ListItemIcon

                      sx={{

                        minWidth: 0,

                        mr: open ? 3 : 'auto',

                        justifyContent: 'center',

                      }}

                    ></ListItemIcon>

                    <ListItemText

                      primary='Apply Leave'

                      sx={{ opacity: open ? 1 : 0 }}

                    />

                  </ListItemButton>

                </Link>

              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>

                <Link

                  to='history'

                  style={{ textDecoration: 'none', color: '#000000DE' }}

                >

                  <ListItemButton

                    sx={{

                      minHeight: 48,

                      justifyContent: open ? 'initial' : 'center',

                      px: 2.5,

                    }}

                  >

                    <ListItemIcon

                      sx={{

                        minWidth: 0,

                        mr: open ? 3 : 'auto',

                        justifyContent: 'center',

                      }}

                    ></ListItemIcon>

                    <ListItemText

                      primary='Leave History'

                      sx={{ opacity: open ? 1 : 0 }}

                    />

                  </ListItemButton>

                </Link>

              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }}>

                <Link

                  to='calender'

                  style={{ textDecoration: 'none', color: '#000000DE' }}

                >

                  <ListItemButton

                    sx={{

                      minHeight: 48,

                      justifyContent: open ? 'initial' : 'center',

                      px: 2.5,

                    }}

                  >

                    <ListItemIcon

                      sx={{

                        minWidth: 0,

                        mr: open ? 3 : 'auto',

                        justifyContent: 'center',

                      }}

                    ></ListItemIcon>

                    <ListItemText

                      primary='Holiday Calender'

                      sx={{ opacity: open ? 1 : 0 }}

                    />

                  </ListItemButton>

                </Link>

              </ListItem>

            {

              data.manager === null ? <ListItem disablePadding sx={{ display: 'block' }}>

              <Link

                to='empleave'

                style={{ textDecoration: 'none', color: '#000000DE' }}

              >

                <ListItemButton

                  sx={{

                    minHeight: 48,

                    justifyContent: open ? 'initial' : 'center',

                    px: 2.5,

                  }}

                >

                  <ListItemIcon

                    sx={{

                      minWidth: 0,

                      mr: open ? 3 : 'auto',

                      justifyContent: 'center',

                    }}

                  ></ListItemIcon>

                  <ListItemText

                    primary='Leave Report'

                    sx={{ opacity: open ? 1 : 0 }}

                  />

                </ListItemButton>

              </Link>

            </ListItem> : ""

            }

 

              {/* <ListItem disablePadding sx={{ display: 'block' }}>

                <Link

                  to='history'

                  style={{ textDecoration: 'none', color: '#000000DE' }}

                >

                  <ListItemButton

                    sx={{

                      minHeight: 48,

                      justifyContent: open ? 'initial' : 'center',

                      px: 2.5,

                    }}

                  >

                    <ListItemIcon

                      sx={{

                        minWidth: 0,

                        mr: open ? 3 : 'auto',

                        justifyContent: 'center',

                      }}

                    ></ListItemIcon>

                    <ListItemText

                      primary='Leave report'

                      sx={{ opacity: open ? 1 : 0 }}

                    />

                  </ListItemButton>

                </Link>

              </ListItem> */}

            </AccordionDetails>

          </Accordion>

          </List>

          {/* <ListItem

          sx={{

            padding: '15px',

            width: '250px',

            marginTop: '3%',

            marginBottom: '0',

          }}

        >

          <img

            style={{ width: '200px' }}

            src='https://th.bing.com/th/id/R.dbd869201a24d1eb03d4b431fc980f92?rik=HRJFrX%2bvfqg6xg&riu=http%3a%2f%2fmattersofdesign.ca%2fwp-content%2fuploads%2f2017%2f03%2frectangle-logo-high-res..png&ehk=gG7N8oTRdj06EI6cu0QwFMRZx3mzwqj7Uqv5vFabjxE%3d&risl=&pid=ImgRaw&r=0'

            width={'250px'}

          />

        </ListItem> */}

        </Drawer>

 

        <div style={{ padding: '40px', paddingTop: '70px', width: '100%' }}>

          <Outlet />

        </div>

      </Box>

    );

}