/**
 * Created by githop on 4/6/16.
 */

class TodosCtrl {
	constructor($scope, todosSrv) {
		this.$scope = $scope;
		this.todoSrv = todosSrv;
		this.$routerOnActivate = next => {
			this.todos = todosSrv.fetch();
		};
	}

	addTodo(todo) {
		this.todoSrv.add(todo).then(todos => this.todos = todos);
		this.$scope.new.todo = '';
	}

	removeTodo(todo) {
		this.todos = this.todoSrv.remove(todo.rm);
	}

	completed() {
		return this.todos.filter(t => t.done === true).length;
	}
}

export default {
	controller: TodosCtrl,
	$routeConfig: [
		{path: '/', name: 'Todos', component: 'gthTodoList', useAsDefault: true},
		{path: '/:id', name: 'Todo', component: 'gthTodo'}
	],
	template: `
	<h4>Todos list: <small>{{$ctrl.completed()}} of {{$ctrl.todos.length}} complete</small></h4>
	<div ng-hide="$ctrl.active">
		<input ng-model="new.todo" type="text"/>
  	<button ng-click="$ctrl.addTodo(new.todo)">add</button>
  	<gth-todo-list todos="$ctrl.todos"></gth-todo-list>
	</div>
	<ng-outlet></ng-outlet>
	`
};