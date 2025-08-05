import React, { useState } from 'react';
import { Button, TextField, Grid, Paper } from '@mui/material';
import { logEvent } from './middleware/logger';

function ShortenerForm() {
  const [urls, setUrls] = useState([{ url: '', expiry: '', shortcode: '' }]);

  const handleChange = (index, key, value) => {
    const updated = [...urls];
    updated[index][key] = value;
    setUrls(updated);
  };

  const handleSubmit = () => {
    urls.forEach(({ url, expiry, shortcode }) => {
      if (!url) return;

      const payload = {
        originalUrl: url,
        expiry: expiry || 30,
        shortcode: shortcode || undefined,
      };

      logEvent("Shorten URL Request", payload);

      // Replace with your backend call
      fetch('http://localhost:8000/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
        .then(res => res.json())
        .then(data => {
          logEvent("Shorten URL Success", data);
          // handle state update/display
        })
        .catch(err => {
          logEvent("Shorten URL Error", { error: err.message });
        });
    });
  };

  return (
    <Paper elevation={3} style={{ padding: '1rem', marginBottom: '1rem' }}>
      {[...Array(5)].map((_, i) => (
        <Grid container spacing={2} key={i} style={{ marginBottom: 10 }}>
          <Grid item xs={12} sm={5}>
            <TextField fullWidth label="Long URL" onChange={(e) => handleChange(i, 'url', e.target.value)} />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Expiry (min)" onChange={(e) => handleChange(i, 'expiry', e.target.value)} />
          </Grid>
          <Grid item xs={4}>
            <TextField fullWidth label="Custom Shortcode" onChange={(e) => handleChange(i, 'shortcode', e.target.value)} />
          </Grid>
        </Grid>
      ))}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shorten URLs
      </Button>
    </Paper>
  );
}

export default ShortenerForm;
