// import { newUserExample } from '../models/modelExamples';

export const api = (app) => {
  app.get('/api', function(req, res) {
    res.status(200).send('hello world');
  });

  // app.get('/saveuserexample', (req, res) => {
  //     try {
  //         saveUser(newUserExample);
  //         res.send('Example test save');
  //     } catch (e) {
  //         res.send('No save test ', e);
  //     }
  // });
  //
  // app.get('/oneuser/', (req, res) => {
  //     getOneUser().then((v) => {
  //         res.send(v);
  //     });
  // });
};
