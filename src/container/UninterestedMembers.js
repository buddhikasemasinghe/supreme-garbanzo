import React from 'react';
import { Container } from '@mui/system';
import { List, ListItem, Divider, IconButton } from '@mui/material';
import MemberCard from '../components/MemberCard';


const UninterestedMembers = ({ participants }) => {
    return (
        <Container disableGutters={true}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {participants.map((member, i) =>
                    <>
                        <ListItem alignItems="flex-start"
                            key={i}
                        >
                         <MemberCard member={member}/>
                         
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                )}
            </List>
        </Container>
    );
}

export default UninterestedMembers;