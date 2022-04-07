import { QueryResult } from "pg";
import { ISession } from 'drizzle-orm/db/session'
import { Knex } from 'knex';

export class KnexSession extends ISession {
    public constructor(private knex: Knex) {
        super();
    }

    public execute(query: string, values?: Array<any>): Promise<QueryResult<any>> {
        return this.knex.raw(query, values ?? [])
    }

    parametrized(_: number): string {
       return "?"
    }
}