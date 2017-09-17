import { api } from './api';

import cors from 'cors';


// let whitelist = [process.env.FRONTEND_URI];
let whitelist = ['http://localhost:8080', 'http://localhost:5000'];
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS !'));
    }
  }
};

export let routes = (app) => {

  app.use(cors(corsOptions));
  api(app);

};
