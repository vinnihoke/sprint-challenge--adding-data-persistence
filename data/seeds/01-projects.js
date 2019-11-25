
exports.seed = function(knex) {
	return knex('projects').insert([
		{ name: "This is Project 1", description: "This has a description", completed: false },
		{ name: "This is Project 2", description: "This does not have a description... Ah damn...", completed: false },
	]);
};
