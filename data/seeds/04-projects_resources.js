
exports.seed = function(knex) {
	return knex('projects_resources').insert([
		{ project_id: 1, resource_id: 2},
		{ project_id: 1, resource_id: 3},
		{ project_id: 2, resource_id: 1},
		{ project_id: 2, resource_id: 2},
		{ project_id: 2, resource_id: 3},
	]);
};
