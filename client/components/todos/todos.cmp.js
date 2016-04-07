/**
 * Created by githop on 4/6/16.
 */


class TodosCtrl {
	constructor() {
		'ngInect';

		//could be an $http request
		this.$onInit = () => {
			//console.log('todos?', this.todos);
		};
	}
}

export default {
	template: `
	<h4>Todos list:</h4>

	<div ng-repeat="todo in $ctrl.todos">
		<gth-todo todo="todo"></gth-todo>
	</div>
	`,
	controller: TodosCtrl,
	bindings: {
		todos: '<'
	}
};