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
		onUpdate: '&'
	},
	controller: TodoCtrl,
	template: `
	<h4>{{$ctrl.todo.task}}</h4>
	Completed? {{$ctrl.todo.done}}

	<button ng-click="$ctrl.onComplete()">finish</button>
	<input ng-model="new.task" type="text" ng-change="$ctrl.update({task: new.task})"/>
	`

};