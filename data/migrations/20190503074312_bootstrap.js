exports.up = function(knex, Promise) {
  // the tables most be created in the right order,
  // tables with FK are created after the referenced table is created
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("name", 128)
        .notNullable()
        .unique();

      tbl.string("description", 256).notNullable();

      tbl.boolean("completed").notNullable();
    })

    .createTable("actions", tbl => {
      // the tracks table must be created before this table is created
      tbl.increments();

      tbl
        .string("description", 256)
        .notNullable()
        .unique();

      tbl.string("notes", 128);

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.boolean("completed").notNullable();
    });
};

exports.down = function(knex, Promise) {
  // tables with FK must be removed before the referenced table is removed
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("description");
};
