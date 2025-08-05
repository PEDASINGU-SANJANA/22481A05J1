import React, { useEffect, useState } from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { logEvent } from './middleware/logger';

function StatisticsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/stats')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        logEvent("Stats Fetched", data);
      })
      .catch(err => {
        logEvent("Stats Fetch Error", { error: err.message });
      });
  }, []);

  return (
    <Paper elevation={3} style={{ padding: '1rem', marginTop: '2rem' }}>
      <Typography variant="h6">URL Click Statistics</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Clicks</TableCell>
            <TableCell>Click Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.shortUrl}</TableCell>
              <TableCell>{item.clickCount}</TableCell>
              <TableCell>
                {item.clicks.map((click, i) => (
                  <div key={i}>
                    {click.timestamp} - {click.referrer} - {click.geoLocation}
                  </div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default StatisticsPage;
