'use client';

import React from 'react';
import Countdown from 'react-countdown';
import moment from 'moment';

const CountdownTimer = () => {
  const weddingDate = moment('2024-09-11T09:00:00'); // Ganti dengan tanggal dan waktu pernikahan Anda
  return (
    <div>
      <Countdown date={weddingDate.toDate()} />
    </div>
  );
};

export default CountdownTimer;
