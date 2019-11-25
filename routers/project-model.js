const db = require('../data/db-config.js');

const find = () => {
	return db('projects')
}

const findById = id => {
	return db('projects').where({ id })
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
	find, findById, findTasksById, findResourcesById, add, update, remove
}