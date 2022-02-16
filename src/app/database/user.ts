import { database, column, ColumnType, Table } from 'websql-orm';

@database("users_db","users")
export class Users extends Table {
   @column(ColumnType.NUMBER | ColumnType.PRIMARY)
    id!: number;

    @column(ColumnType.STRING)
    email!: string;

    @column(ColumnType.STRING)
    password!: string;
}