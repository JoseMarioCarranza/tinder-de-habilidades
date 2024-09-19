/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('jobs').then(function (exists) {
        if (!exists) {
            return knex.schema.createTable('jobs', function (table) {
                table.increments('job_id').primary();
                table.string('name').notNullable();
                table.string('description').notNullable();
                table.integer('job_hours').notNullable();
                table.string('address').notNullable();
                table.string('date').notNullable();
                table.string('time').notNullable();
                table.decimal('price', 12, 2).notNullable();
                table.boolean('user_accepted').notNullable().defaultTo(false);
                table.decimal('advance', 12, 2).notNullable();
                table.boolean('advance_accepted').notNullable().defaultTo(false);
                table.boolean('is_it_done').notNullable().defaultTo(false);
                table.decimal('grade', 12, 2).notNullable().defaultTo(0);
                table.boolean('job_paid').notNullable().defaultTo(false);

                // Clave foránea a la tabla users
                table.integer('user_id').unsigned()
                    .references('user_id')
                    .inTable('users')
                    .onDelete('CASCADE'); // Opcional: comportamiento al eliminar

                // Clave foránea a la tabla companies
                table.integer('company_id').unsigned()
                    .references('company_id')
                    .inTable('companies')
                    .onDelete('CASCADE'); // Opcional: comportamiento al eliminar

                table.timestamp('created_at').defaultTo(knex.fn.now());
            });
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('jobs').then(function (exists) {
        if (exists) {
            return knex.schema.dropTable('jobs')
        }
    })
};
