/**
 * Created by githop on 4/6/16.
 */

export default {
	$routeConfig: [
		{path: '/', name: 'Todos', component: 'gthTodoList', useAsDefault: true},
		{path: '/:id', name: 'Todo', component: 'gthTodo'}
	],
	template: `
	<h4>Todos list:</h4>
	<ng-outlet></ng-outlet>
	`
};