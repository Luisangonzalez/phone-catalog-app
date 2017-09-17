import { PHONES } from '../mockPhones';

export const api = (app) => {
  app.get('/phones', function(req, res) {
    res.status(200).json(PHONES);
  });
};
