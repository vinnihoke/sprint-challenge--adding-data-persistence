
exports.seed = function(knex) {
	return knex('tasks').insert([
		{ project_id: 1, description: "Task 1", notes: "These are some optional notes", completed: false },
		{ project_id: 1, description: "Task 2", completed: false },
		{ project_id: 2, description: "Task 1", notes: "These are more optional notes", completed: false },
	]);
};
