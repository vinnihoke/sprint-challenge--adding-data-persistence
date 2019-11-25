const db = require('../data/db-config.js');


const add = resource => {
	return db('resources').insert(resource)
}

const update = (id, changes) => {
	return db('resources').where({ id }).update(changes);
}

const remove = id => {
	return db('resources').where({ id }).del()
}

module.exports = {
	add, update, remove
}