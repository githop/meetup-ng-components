/**
 * Created by githop on 4/6/16.
 */


class TodoCtrl {
	constructor(todosSrv) {
		this.$routerOnActivate = next => {
			let id = next.params.id;
			console.log("id?", id);
			this.todo = todosSrv.fetch()[--id];
		};
	}
	update(todo) {
		this.onUpdate({task: todo.task});
	}
}

export default {
	bindings: {
		todo: '<',
		$router: '<',
		onComplete: '&',
		onUpdate: '&'
	},
	controller: TodoCtrl,
	template: `
	<h4>{{$ctrl.todo.task}}</h4>
	<label for="done">Completed?</label>
	<input id="done" type="checkbox" ng-model="todo.done" ng-change="$ctrl.onComplete()"/>
	<input ng-model="new.task" type="text" ng-change="$ctrl.update({task: new.task})"/>
	`

};