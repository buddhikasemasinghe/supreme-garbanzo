import React from 'react'
import { Avatar, ListItemText, ListItemAvatar, Typography } from '@mui/material';

const MemberCard = ({ member }) => {
    return (
        <>
            <ListItemAvatar>
                <Avatar alt="Avatar" src={member.gender === 'female' ? "/images/girl.png" : "/images/boy.jpeg"} />
            </ListItemAvatar>
            <ListItemText
                primary={member.name}
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Contact No: {member.phone}
                        </Typography>
                        <br />
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body3"
                            color="text.primary"
                        >
                            {'Lives in ' + member.location}
                        </Typography>
                        <br />
                        {(member.notes && <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body3"
                            color="text.primary"
                        >
                            {'Note: ' + member.notes}
                        </Typography>)
                        }
                        <br />
                    </>
                }
            />
        </>
    )
}

export default MemberCard
