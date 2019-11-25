
exports.up = function(knex) {
  knex.schema
  .createTable('projects', table => {
		table.increments();
		table.string('name', 140).notNullable()
		table.string('description', 500)
		table.boolean('completed')
  })
  .createTable('tasks', table => {
		table.increments();
		table.integer('project_id')
			.unsigned()
			.notNullable()
			.references('projects.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table.string('description', 500).notNullable();
		table.string('notes');
		table.boolean('completed')
  })
  .createTable('resources', table => {
		table.increments();
		table.string('name', 140).notNullable();
		table.string('description', 500);
  })
  .createTable('projects_resources', table => {
		table.primary(["project_id", "resource_id"]);
		table.integer('project_id')
			.unsigned()
			.notNullable()
			.references('projects.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table.integer('resource_id')
			.unsigned()
			.notNullable()
			.references('resources.id')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    return(
		knex.schema
			.dropTableIfExists('projects_resources')
			.dropTableIfExists('resources')
			.dropTableIfExists('tasks')
			.dropTableIfExists('projects')
	)
};
