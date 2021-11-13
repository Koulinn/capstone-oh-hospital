import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {format} from 'date-fns'

function ChatCard({user, message, img}) {
    return (
        <Card sx={{ 
            maxWidth: '75%',
            marginLeft: (user ? '0px' : 'auto'), 
            backgroundColor: (user ? '#0096d93d' : '#b7b9c35d')
            }}
            className='my-3'
            >
            <CardContent>
            {img ?
                    <img
                        className="mb-2"
                        src={img}
                        alt=""
                    />
                    : ''
                }
                <p>{message.text}</p>
                <span style={{textAlign:'right'}}>{format(new Date(message.createdAt), 'HH:mm')}</span>
            </CardContent>
            
        </Card>
    )
}

export default ChatCard
