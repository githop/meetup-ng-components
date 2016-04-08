/**
 * Created by githop on 4/6/16.
 */

import angular from 'angular';
import '@angular/router/angular1/angular_1_router';
import './components/components';
import './models/models';
import './services/services';

let app = angular.module('app', [
		  'ngComponentRouter',
			'app.components',
			'app.services',
			'app.models'
		])
		.config(($locationProvider) => {
			$locationProvider.html5Mode(true);
		})
		.value('$routerRootComponent', 'appRoot');

export default app;