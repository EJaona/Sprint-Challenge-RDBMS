exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", action => {
    action.increments();

    action
      .integer("projectId")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects");

    action.string("description", 123).notNullable();

    action.text("notes", 123).notNullable();

    action.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
