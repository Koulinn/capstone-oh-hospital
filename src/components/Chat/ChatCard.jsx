import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function ChatCard({user}) {
    return (
        <Card sx={{ 
            maxWidth: '75%', 
            marginLeft: (user ? '0px' : 'auto'), 
            backgroundColor: (user ? '#0096d93d' : '#b7b9c35d')
            }}
            className="my-3"
            >
            <CardContent>
                <p>messagakjsndlksan lkasjdlksjadlksj daslkjdk jsndkjasnkjdas kjdkjsand jsandkjsan dakjsndjasnj dakls dask dals da</p>
                <span>15:55</span>
            </CardContent>
            
        </Card>
    )
}

export default ChatCard
