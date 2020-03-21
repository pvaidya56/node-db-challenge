exports.seed = async function(knex) {
  await knex("tasks").insert([
    { id: 1, description: "Join Lambda School", completed: true, project_id: 1 },
    { id: 2, description: "Practice Javascript", completed: false, project_id: 1 },
    { id: 3, description: "Array Methods", completed: false, project_id: 1 },
    { id: 4, description: "Classes", completed: false, project_id: 1 },
    { id: 5, description: "Practice Functional Components", completed: false, project_id: 2 },
    {
      id: 6,
      description: "Learn Class Components",
      notes: "These are not so great",
      completed: false,
      project_id: 2
    },
    {
      id: 7,
      description: "Add Data Persistance",
      completed: false,
      project_id: 3
    },
    {
      id: 8,
      description: "Test your database",
      completed: false,
      project_id: 3
    }
  ]);
};