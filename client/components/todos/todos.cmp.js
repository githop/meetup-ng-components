/**
 * Created by githop on 4/6/16.
 */

class TodosCtrl {
	remove(todo) {
		console.log('todo#remove', todo);
		this.onRemove({rm: todo});
	}
}

export default {
	bindings: {
		todos: '<',
		onRemove: '&'
	},
	controller: TodosCtrl,
	template: `
	<h4>Todos list:</h4>
	<div ng-repeat="todo in $ctrl.todos">
		<gth-todo
		todo="todo"
		on-complete="todo.complete()"
		on-update="todo.update(task)"></gth-todo>
		<button ng-click="$ctrl.remove({rm: todo})">remove</button>
	</div>
	`
};