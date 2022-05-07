import { Router, Request, Response, response } from 'express';
import repo from '../../data/repos.json';
const axios = require('axios');
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((data: any) => {
      let response = [];
      for (const arr of repo) {
        if (arr.fork === false) {
          response.push(arr);
        }
      }
      for (const arr of data.data) {
        if (arr.fork === false) {
          response.push(arr);
        }
      }
      res.status(200).send(response);
    })
    .catch((err: any) => res.json(err));
});

repos.get('/:name', (req, res) => {
  res.header('Cache-Control', 'no-store');
  const name = req.params.name;
  axios
    .get('https://api.github.com/users/silverorange/repos')
    .then((data: any) => {
      let response = [];
      for (const arr of repo) {
        if (arr.fork === false && arr.name === name) {
          response.push(arr);
        }
      }
      for (const arr of data.data) {
        if (arr.fork === false && arr.name === name) {
          response.push(arr);
        }
      }

      res.status(200).send(response);
    })
    .catch((err: any) => res.json(err));
});
