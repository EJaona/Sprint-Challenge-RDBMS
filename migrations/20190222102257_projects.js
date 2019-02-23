exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", project => {
    project.increments();

    project
      .string("name", 123)
      .notNullable()
      .unique();

    project.string("description", 123).notNullable();

    project.boolean("completed").defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
