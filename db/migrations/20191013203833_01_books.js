
exports.up = function(knex) {
    return knex.schema
    .createTable('Books', function (table) {
        table.increments('id');
        table.string('title').notNullable();
        table.string('author').notNullable();
        table.date('dateFinished').notNullable();
        table.integer('pages').notNullable();
        table.integer('rating').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
     .dropTable("Books")
};

exports.config = { transaction: false }