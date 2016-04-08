/**
 * Created by githop on 4/7/16.
 */


class TodoEditor {
	update(todo) {
		this.onUpdate({task: todo.task});
	}

}

export default {
	controller: TodoEditor,
	bindings: {
		todo: '<',
		onComplete: '&',
		onUpdate: '&'
	},
	template: `
	<label for="done">Completed?</label>
	<input id="done" type="checkbox" ng-model="$ctrl.todo.done" ng-change="$ctrl.onComplete()"/>
	<input ng-model="new.task" type="text" ng-change="$ctrl.update({task: new.task})"/>
	`
};