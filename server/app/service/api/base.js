'use strict';
const knex = require('../../config/config.knex.js');
class BaseService {
	constructor(props) {
		this.model = props
	}

	all() {
		return knex(this.model).select()
	}

	detail(id){
		return knex(this.model).where('id', '=', id).select()
	}

	insert(params) {
		return knex(this.model).insert(params)
	}

	update(id, params) {
		return knex(this.model).where('id', '=', id).update(params)
	}

	delete(id) {
		return knex(this.model).where('id', '=', id).del()
	}
}

module.exports = BaseService;