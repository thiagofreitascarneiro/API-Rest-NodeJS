// eslint-disable-next-line 
import { knex } from 'knex'

declare module 'knex/trypes/table' {
    export interface Tables {
        transactions: {
            id: string;
            tittle: string;
            amount: number;
            created_at: string,
            session_id?: string
        }
    }
}