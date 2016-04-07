/**
 * Created by githop on 4/6/16.
 */

export default ($timeout, TodoModel) => {
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
		return _todos;
	}

	function add(todo) {
		++_ids;
		let randomNum = (1 + (Math.random() * 3)) * 1000;
		return new Promise(resolve => {

			$timeout(() => {
				_todos.push(new TodoModel(todo, _ids));
				resolve(_todos);
			}, randomNum);

		});
	}

	function remove(todo) {
		_todos = _todos.filter(t => t !== todo);
		return _todos;
	}

}