import { setupServer } from "msw/node";
import { newsApiHandler } from "./handler";

export const server = setupServer(...newsApiHandler);
