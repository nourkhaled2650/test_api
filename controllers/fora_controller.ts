import { RequestHandler } from 'express';
import { fixtures } from '../data/dummy_data';

export const getFixtures: RequestHandler = (req, res, next) => {
  try {
    res.status(200).json(fixtures);
  } catch (error) {
    next(error);
  }
};
