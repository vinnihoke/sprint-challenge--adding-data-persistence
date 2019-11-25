const db = require('../data/db-config.js');

const find = () => {
	return db('projects')
}

const findById = id => {
	return db('projects').where({ id })
}

const findTasksById = id => {
	return db('projects as p')
		.select('p.id', 't.project_id', 't.description', 't.notes', 't.completed').innerJoin('tasks as t', function(){
			this.on('p.id', '=', 't.project_id').andOn('p.id', '=', Number(id))
		}).orderBy('t.project_id')
}

const add = project => {
	return db('projects').insert(project).then(projects => {
		return findById(projects[0])
	})
}

const update = (id, changes) => {
	return db('projects').where({ id }).update(changes);
}

const remove = id => {
	return db('projects').where({ id }).del()
}

module.exports = {
	find, findById, findTasksById, add, update, remove
}