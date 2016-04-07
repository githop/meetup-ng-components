/**
 * Created by githop on 4/6/16.
 */

class TodosCtrl {
	constructor() {
		this.$onChanges = changeObj => {
			console.log('ch ch changes', changeObj.completed.currentValue);
		}
	}
	remove(todo) {
		console.log('todo#remove', todo);
		this.onRemove({rm: todo});
	}
}

export default {
	bindings: {
		todos: '<',
		completed: '<',
		onRemove: '&'
	},
	controller: TodosCtrl,
	template: `
	<h4>Todos list:</h4>
	<div ng-repeat="todo in $ctrl.todos track by todo.id">
		<gth-todo
		todo="todo"
		on-complete="todo.complete()"
		on-update="todo.update(task)"></gth-todo>
		<button ng-click="$ctrl.remove({rm: todo})">remove</button>
	</div>
	`
};