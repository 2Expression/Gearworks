/// <reference path="./../typings/typings.d.ts" />

import pouch = require("pouchdb");

export const users = new pouch(`${process.env.couchUrl}/users`);
