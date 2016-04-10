/**
 * Created by githop on 4/6/16.
 */
import './todo.scss';

class TodoCtrl {
	constructor() {
		this.$onInit = () => {
			this.todosCtrl.active = true;
		};
		this.$onDestroy = () => {
			this.todosCtrl.active = false;
		};
		this.$routerOnActivate = next => {
			let id = next.params.id;
			this.todo = this.todosCtrl.todos[--id];
		};
	}
}

export default {
	require: {
		todosCtrl: '^gthTodos'
	},
	controller: TodoCtrl,

	template: `
	<div class="gth-todo mdl-shadow--2dp">
		<div class="gth-todo-content">
			<h4 class=""><small>task: </small>{{$ctrl.todo.task}}</h4>
			<gth-todo-editor
				todo="$ctrl.todo"
				on-complete="$ctrl.todo.complete()"
				on-update="$ctrl.todo.update(task)">
			</gth-todo-editor>
		</div>
	</div>

	`

};