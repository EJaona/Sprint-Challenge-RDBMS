exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Sprint_Challenge",
          description:
            "Create a database with projects and actions that connect to each other"
        },
        { name: "Sleep", description: "Get much needed sleep" },
        { name: "Eat", description: "Eat food before sleeping" }
      ]);
    });
};
