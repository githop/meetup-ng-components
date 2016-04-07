/**
 * Created by githop on 4/6/16.
 */


class TodoCtrl {
	update(todo) {
		this.onUpdate({task: todo.task});
	}
}

export default {
	bindings: {
		todo: '<',
		onComplete: '&',
		onUpdate: '&',
		onRemove: '&'
	},
	controller: TodoCtrl,
	template: `
	<h4>{{$ctrl.todo.task}}</h4>
	<label for="done">Completed?</label>
	<input id="done" type="checkbox" ng-model="todo.done" ng-change="$ctrl.onComplete()"/>
	<input ng-model="new.task" type="text" ng-change="$ctrl.update({task: new.task})"/>
	`

};