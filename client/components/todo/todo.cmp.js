/**
 * Created by githop on 4/6/16.
 */


class TodoCtrl {
	constructor(todosSrv) {
		this.$routerOnActivate = next => {
			let id = next.params.id;
			console.log('id?', id);
			this.todo = todosSrv.fetch()[--id];
		};
	}
}

export default {
	bindings: {
		$router: '<'
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