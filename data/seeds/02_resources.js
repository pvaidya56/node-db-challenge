exports.seed = async function(knex) {
  await knex("resources").insert([
    {
      id: 1,
      name: "A Computer",
      description: "Needed in order to make programs"
    },
    { id: 2, name: "FrontEnd Masters" },
    { id: 3, name: "JS Resources" },
    { id: 4, name: "Node.js Book" }
  ]);
};