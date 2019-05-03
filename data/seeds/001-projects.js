exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Magic.io",
          description: "a magical site where magic is real",
          completed: false
        },
        {
          name: "databetes",
          description: "a insulin app to get your BSL",
          completed: false
        },
        {
          name: "unnamed app",
          description: "we dont know yet what it does",
          completed: false
        }
      ]);
    });
};
