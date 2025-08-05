import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

function URLList({ shortenedUrls = [] }) {
  return (
    <Paper elevation={3} style={{ padding: '1rem' }}>
      <Typography variant="h6">Shortened URLs</Typography>
      <List>
        {shortenedUrls.map((url, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Short: ${url.shortUrl}`}
              secondary={`Original: ${url.originalUrl} | Expiry: ${url.expiry}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default URLList;
