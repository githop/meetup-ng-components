/**
 * Created by githop on 4/6/16.
 */

import './appRoot.scss';

class AppRootCtrl {
	constructor() {
		this.$onInit = () => {console.log('AppRootCtrl');};
		this.welcome = 'Hello World!';
	}

}

export default {
	controller: AppRootCtrl,
	template: `
	 <div class="gth-ribbon">
    <h1 class="gth-banner-text gth-ribbon__text mdl-typography--display-4">Rocky Mountain Angular</h1>
  </div>
		<main class="gth-main mdl-layout__content">
			<div class="gth-container mdl-grid">
				<div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
				 <div class="gth-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col">

    			<h3 class="gth-todos-ln mdl-typography--display-2"><a ng-link="[\'Todos\']">Todos</a></h3>
   			 	<ng-outlet></ng-outlet>
				 </div>
		</main>
    `,
	$routeConfig: [
		{path: '/todos/...', name: 'Todos', component: 'gthTodos'}
	]
};