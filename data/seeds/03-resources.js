
exports.seed = function(knex) {
	return knex('resources').insert([
		{ name: "Resource 1", description: "This is a description of a resource"},
		{ name: "Resource 2", description: "This is a description of a resource"},
		{ name: "Resource 3", description: "This is a description of a resource"},
	]);
};
