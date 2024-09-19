/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('companies').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('companies', function (table) {
                table.increments('company_id').primary();
                table.string('name').notNullable();
                table.string('address').notNullable();
                table.string('email').notNullable().unique();
                table.string('password').notNullable();
                table.string('phone').notNullable();
                table.boolean('active').notNullable().defaultTo(true)
                table.timestamp('created_at').defaultTo(knex.fn.now())
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('companies').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('companies')
        }
    })
};
