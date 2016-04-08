/**
 * Created by githop on 4/7/16.
 */

class TodoListCtrl {
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

	//completed() {
	//	return this.todos.filter(t => t.done === true).length;
	//}
}

export default {
	controller: TodoListCtrl,
	template: `
	<input ng-model="new.todo" type="text"/>
  <button ng-click="$ctrl.addTodo(new.todo)">add</button>
   <div ng-repeat="todo in $ctrl.todos">
   	<a ng-link="[\'Todo\', {id: todo.id}]">{{todo.task}}</a>
   </div>
	`
};

