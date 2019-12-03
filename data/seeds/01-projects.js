
exports.seed = function(knex) {
	return knex('projects').insert([
		{ id: 1, name: "This is Project 1", description: "This has a description", completed: false },
		{ id: 2, name: "This is Project 2", description: "This does not have a description... Ah damn...", completed: false },
	]);
};

 // ! Future Reference
// When you rollback you need to pass in the ID for the Rollback. 
