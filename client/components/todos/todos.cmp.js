/**
 * Created by githop on 4/6/16.
 */

export default {
	bindings: {
		todos: '<'
	},
	template: `
	<h4>Todos list:</h4>

	<div ng-repeat="todo in $ctrl.todos">
		<gth-todo
		todo="todo"
		on-complete="todo.complete()"
		on-update="todo.update(task)"></gth-todo>
	</div>
	`
};