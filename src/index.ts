import { QueryResult } from "pg";
import { ISession } from 'drizzle-orm/db/session'

export class KnexSession extends ISession {
    public constructor(private knex: any) {
        super();
    }

    public execute(query: string): Promise<QueryResult<any>> {
        return this.knex.raw(query);
    }
}