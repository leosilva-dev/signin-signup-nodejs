import { Knex } from "knex";
import { tableNames } from "../tableNames";

export async function up(knex: Knex) {
    return knex.schema.alterTable(tableNames.user, table => {
        table.string('email').notNullable().unique().alter();
    })  
}

export async function down(knex: Knex) {
    return knex.schema.alterTable(tableNames.user, table => {
        table.dropUnique(['email'])
    })  
}