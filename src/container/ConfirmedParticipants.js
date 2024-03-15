import React from 'react';
import { Container } from '@mui/system';
import { List, ListItem, Divider, IconButton } from '@mui/material';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import MemberCard from '../components/MemberCard';


const ConfirmedParticipants = ({ participants }) => {
    return (
        <Container disableGutters={true}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {participants.map((member, i) =>
                    <>
                        <ListItem alignItems="flex-start"
                            key={i}
                            secondaryAction={
                                <IconButton edge="end" aria-label="remove">
                                    <GroupRemoveIcon/>
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

export default ConfirmedParticipants;