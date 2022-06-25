import express from "express";

//? creating a single ton file for router

//? i.e reusing the same router accross the app

export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    // create a router instance if not already else return existing one

    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
