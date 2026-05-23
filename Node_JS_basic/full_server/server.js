// Task 8: Create a full server with organized structure using Express

import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

app.listen(1245);

export default app;
