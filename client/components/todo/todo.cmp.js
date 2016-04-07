/**
 * Created by githop on 4/6/16.
 */


class TodoCtrl {
	constructor() {
		this.$onChanges = (changeObj) => {
			console.log('changes todo', changeObj);
		};
	}

	update(todo) {
		this.onUpdate({task: todo.task});
	}
}

export default {
	controller: TodoCtrl,
	template: `
	<h4>{{$ctrl.todo.task}}</h4>
	Completed? {{$ctrl.todo.done}}

	<button ng-click="$ctrl.onComplete()">finish</button>
	<input ng-model="new.task" type="text"/>
	<button ng-click="$ctrl.update({task: new.task})">edit</button>
	`,
	bindings: {
		todo: '<',
		onComplete: '&',
		onUpdate: '&'
	}
};