import React from 'react';
import { Container } from '@mui/system';
import { List, ListItem, Divider, IconButton } from '@mui/material';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MemberCard from '../components/MemberCard';


const UnconfirmedMembers = ({ participants }) => {
    return (
        <Container disableGutters={true}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {participants.map((member, i) =>
                    <>
                        <ListItem alignItems="flex-start"
                            key={i}
                            secondaryAction={
                                <IconButton edge="end" aria-label="remove">
                                    <GroupAddIcon/>
                                </IconButton>
                            }
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

export default UnconfirmedMembers;