import { Knex } from "knex";
import { tableNames } from "../tableNames";

export async function up(knex: Knex) {
    return knex.schema.alterTable(tableNames.user, table => {
        table.string('username').nullable().alter();
    })  
}

export async function down(knex: Knex) {
    return knex.schema.alterTable(tableNames.user, table => {
        table.string('username').notNullable().alter();
    })  
}