import { Knex } from "knex";
import { tableNames } from "../tableNames";

export async function up(knex: Knex) {
    return knex.schema.createTable(tableNames.user, table => {
        table.bigIncrements('id').primary();
        table.string('name').notNullable();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    })    
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tableNames.user)
}