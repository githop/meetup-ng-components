/**
 * Created by githop on 4/6/16.
 */

class appRootCtrl {
	constructor() {
		'ngInject';
		this.welcome = 'Everything Seems to be in order this wonderful eve!';
	}

}

export default {
	controller: appRootCtrl,
	template: `
    <h3>{{$ctrl.welcome}}</h3>
    	<a ng-link="[\'Todos\']">Todos</a>
    <ng-outlet></ng-outlet>
    `,
	$routeConfig: [
		{path: '/todos/...', name: 'Todos', component: 'gthTodos'}
	]
};