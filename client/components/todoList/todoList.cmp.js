/**
 * Created by githop on 4/7/16.
 */

export default {
	bindings: {
		todos: '<'
	},
	template: `
   <div ng-repeat="todo in $ctrl.todos track by todo.id">
   	{{todo.id}}: <a ng-link="[\'Todo\', {id: todo.id}]">{{todo.task}}</a>
   </div>
	`
};

