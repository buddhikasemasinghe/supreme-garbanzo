import './App.css';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Box from '@mui/material/Box';
import ConfirmedParticipants from './container/ConfirmedParticipants';
import AllMembers from './data/Members';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import UnconfirmedMembers from './container/UnconfirmedMembers';
import UninterestedMembers from './container/UninterestedMembers';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function App() {
  const [value, setValue] = useState('1');
  const participants = AllMembers();

  const confirmed = participants.filter(member => member.status === 'YES');
  const notInterested = participants.filter(member => member.status === 'NO');
  const unconfirmed = participants.filter(member => member.status === '');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSearchMember = name => {
    
  }

  return (
    <>
    <Container>  
    <Typography variant="h5" gutterBottom component="div" style={{textAlign: 'center', paddingTop: 3}}>
          98 O/L and 2001 A/L Get together
      </Typography>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={'Yes(' + confirmed.length +')'} value="1" />
            <Tab label={'To Confirm(' + unconfirmed.length +')'} value="2" />
            <Tab label={'No(' + notInterested.length +')'} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{padding: 0}}><ConfirmedParticipants participants={confirmed}/></TabPanel>
        <TabPanel value="2" style={{padding: 0}}><UnconfirmedMembers participants={unconfirmed}/></TabPanel>
        <TabPanel value="3" style={{padding: 0}}><UninterestedMembers participants={notInterested}/></TabPanel>
      </TabContext>
    </Container>
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon onChange={handleSearchMember}/>
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
