import path from 'path';
/* eslint-disable-next-line */
import express from 'express';

export default app => {
  app.use('/files', express.static(path.resolve(__dirname, '../live/uploads')));
};
