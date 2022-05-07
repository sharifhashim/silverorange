import { Router, Request, Response } from 'express';
const axios = require('axios');
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((data: any) => res.json(data.data))
    .catch((err: any) => res.json(err));
  //res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  //res.json([]);
});
