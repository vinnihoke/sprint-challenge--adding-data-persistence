const db = require('../data/db-config.js');

const findResourcesById = id => {
	return db('projects as p')
		.select('p.id', 'r.project_id', 't.description', 't.notes', 't.completed').innerJoin('resources as r', function(){
			this.on('p.id', '=', 't.project_id').andOn('p.id', '=', Number(id))
		}).orderBy('t.project_id')
}

const add = task => {
	return db('tasks').insert(task)
}

const update = (id, changes) => {
	return db('tasks').where({ id }).update(changes);
}

const remove = id => {
	return db('tasks').where({ id }).del()
}

module.exports = {
	add, update, remove, findResourcesById
}