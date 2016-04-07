/**
 * Created by githop on 4/6/16.
 */

export default (TodoModel) => {
	'ngInject';

	let _todos = [];
	let _ids = 0;

	_todos.push(new TodoModel('first todo for fun', _ids));

	return {
		fetch: fetch,
		add: add,
		remove: remove
	};

	function fetch() {
		console.log('todos fetched', _todos);
		return _todos;
	}

	function add(todo) {
		++_ids;
		_todos.push(new TodoModel(todo, _ids));
		return _todos;
	}

	function remove(todo) {
		var ret = [];
		for (let i of _todos) {
			if (i !== todo) {
				ret.push(i)
			}
		}
		_todos = ret;
		return _todos;
	}

}