import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './IconCard.module.css';

export default function IconCard({ img, title, active }) {
  return (
    <Box className={`${styles.card} ${active ? styles.active : ''}`}>
      <img src={img} alt={title} className={styles.icon} />
      <Typography className={styles.title}>{title}</Typography>
    </Box>
  );
}