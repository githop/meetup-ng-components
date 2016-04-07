/**
 * Created by githop on 4/6/16.
 */


class TodosCtrl {
	constructor(todos) {
		'ngInject';

		this.$onChanges = (changeObj) => {
			console.log('changes', changeObj);
		};

	}
}

export default {
	template: `
	<h4>Todos list:</h4>

	<div ng-repeat="todo in $ctrl.todos">
		<gth-todo
		task="todo.task"
		completed="todo.done"
		on-complete="todo.complete()"></gth-todo>
	</div>
	`,
	controller: TodosCtrl,
	bindings: {
		todos: '<'
	}
};