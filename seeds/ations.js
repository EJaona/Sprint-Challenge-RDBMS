exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        { projectId: 1, description: "Fork and clone repo", notes: "" },

        { projectId: 1, description: "Add PM as collaborator", notes: "" },

        {
          projectId: 1,
          description: "PR will let your PM know you are done",
          notes: ""
        },

        { projectId: 2, description: "Change into Pjs", notes: "" },

        { projectId: 2, description: "Turn on NetFlix", notes: "" },

        {
          projectId: 2,
          description: "Knockout as soon a you start a movie",
          notes: ""
        },

        { projectId: 3, description: "Make a sandwich", notes: "" },

        { projectId: 3, description: "Get some drank", notes: "" },

        { projectId: 3, description: "Eat and drink till full", notes: "" }
      ]);
    });
};
