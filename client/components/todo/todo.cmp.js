/**
 * Created by githop on 4/6/16.
 */


class TodoCtrl {
	constructor(todosSrv) {
		this.$onInit = () => {
			this.todosCtrl.active = true;
		};
		this.$onDestroy = () => {
			this.todosCtrl.active = false;
		};
		this.$routerOnActivate = next => {
			let id = next.params.id;
			this.todo = todosSrv.fetch()[--id];
		};
	}
}

export default {
	require: {
		todosCtrl: '^gthTodos'
	},
	controller: TodoCtrl,
	template: `
	<h4>{{$ctrl.todo.task}}</h4>
	<gth-todo-editor
		todo="$ctrl.todo"
		on-complete="$ctrl.todo.complete()"
		on-update="$ctrl.todo.update(task)">
	</gth-todo-editor>
	`

};