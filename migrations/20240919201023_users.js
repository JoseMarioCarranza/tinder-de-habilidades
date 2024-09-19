/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('users').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('users', function (table) {
                table.increments('user_id').primary();
                table.string('first_name').notNullable();
                table.string('last_name').notNullable();
                table.string('address').notNullable();
                table.string('email').notNullable().unique();
                table.string('password').notNullable();
                table.string('phone').notNullable();
                table.specificType('skills', 'text[]').notNullable();
                table.decimal('charge_hr', 12, 2);
                table.decimal('avg_points', 12, 2).defaultTo(0);
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
    return knex.schema.hasTable('users').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('users')
        }
    })
};
