import * as knex from "knex";
import { Model } from "objection";

let db: Db;

export class Db {
  knexClient: knex.Knex; // TODO: find type of this

  constructor(knex: any) {
    this.knexClient = knex;
  }

  public getRatingsWithCategories(
    startTime: string | number,
    endTime: string | number
  ) {
    return this.knexClient.raw(
      "sSELECT *" +
        " FROM ratings as r" +
        " LEFT JOIN rating_categories as c" +
        " ON r.rating_category_id = c.id" +
        ` WHERE unixepoch(r.created_at) BETWEEN ${startTime} AND ${endTime}` +
        " ORDER BY r.created_at DESC"
    );
  }

  public getRatingsWithCategoriesAndTickets(
    startTime: string | number,
    endTime: string | number
  ) {
    return this.knexClient.raw(
      "SELECT r.rating, c.name, c.id as category_id, r.ticket_id, t.subject, r.created_at " +
        " FROM ratings as r" +
        " LEFT JOIN rating_categories as c" +
        " ON r.rating_category_id = c.id" +
        " LEFT JOIN tickets as t" +
        " ON r.ticket_id = t.id" +
        ` WHERE unixepoch(r.created_at) BETWEEN ${startTime} AND ${endTime}`
    );
  }
}

export function getDb(): Db {
  if (!db) {
    const knexClient = knex.knex({
      client: "sqlite3",
      useNullAsDefault: true,
      connection: {
        filename: "./database.db",
      },
    });

    Model.knex(knexClient);

    db = new Db(knexClient);
  }

  return db;
}
