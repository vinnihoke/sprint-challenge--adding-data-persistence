const db = require('../data/db-config.js');

// select * from projects_resources as pr
// join projects as p
// on p.id = pr.project_id and p.id = 1
// join resources as r
// on r.id = pr.resource_id

// Testing required
const findResourcesById = id => {
	return db('projects_resources as pr')
		.innerJoin('projects as p', function(){
			this.on('p.id', '=', 'pr.project_id').andOn('p.id', '=', Number(id))
		})
		.innerJoin('resources as r', function(){
			this.on('r.id', '=', 'pr.resource_id')
		})
		.orderBy('pr.resource_id')
}

// Testing required
const add = resource => {
	return db('resources').insert(resource)
}

// Testing required
const update = (id, changes) => {
	return db('resources').where({ id }).update(changes);
}

// Testing required
const remove = id => {
	return db('resources').where({ id }).del()
}

module.exports = {
	add, update, remove, findResourcesById
}