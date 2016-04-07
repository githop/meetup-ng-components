/**
 * Created by githop on 4/6/16.
 */

export default (TodoModel) => {
	'ngInject';

	let _todos = [];

	_todos.push(new TodoModel('first todo for fun'));

	return {
		fetch: fetch,
		add: add
	};

	function fetch() {
		return _todos;
	}

	function add(todo) {
		_todos.push(new TodoModel(todo));
	}

}