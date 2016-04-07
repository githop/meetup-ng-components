/**
 * Created by githop on 4/6/16.
 */


class TodoCtrl {
	constructor() {
		this.$onChanges = (changeObj) => {
			console.log('changes todo', changeObj);
		};
	}
}

export default {
	controller: TodoCtrl,
	template: `
	<h4>{{$ctrl.task}}</h4>
	Completed? {{$ctrl.completed}}

	<button ng-click="$ctrl.onComplete({done: $ctrl.completed})">finish</button>
	`,
	bindings: {
		task: '<',
		completed: '<',
		onComplete: '&'
	}
};