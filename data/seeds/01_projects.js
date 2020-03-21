exports.seed = async function(knex) {
  await knex("projects").insert([
    { id: 1, name: "Learn Javascript" },
    { id: 2, name: "Learn React" },
    {
      id: 3,
      name: "Build a WEB API",
      description: "Build a RESTful web API"
    }
  ]);
};