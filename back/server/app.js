import express from 'express';
import bodyParser from 'body-parser';

import { routes } from './routes/index';

const app = express();

app.use(bodyParser.json());

routes(app);

// Static folder
app.use('/', express.static('../front/dist'));

export { app };
