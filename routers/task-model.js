const db = require('../data/db-config.js');

// Operational
const findTasksById = id => {
	return db('projects as p')
		.select('p.id', 't.project_id', 't.description', 't.notes', 't.completed').innerJoin('tasks as t', function(){
			this.on('p.id', '=', 't.project_id').andOn('p.id', '=', Number(id))
		}).orderBy('t.project_id').then( tasks => {
			for(let task of tasks){
				task.completed === 0 ? task.completed = false : task.completed = true
			}
			return tasks;
		} )
}

// Operational
const add = (task) => {
	return db('tasks').insert(task)
}

// Operational
const update = (id, changes) => {
	return db('tasks').where({ id }).update(changes);
}

// Operational
const remove = id => {
	return db('tasks').where({ id }).del()
}

module.exports = {
	add, update, remove, findTasksById
}