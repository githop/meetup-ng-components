/**
 * Created by githop on 4/6/16.
 */
import './mdl.min';
import angular from 'angular';
import '@angular/router/angular1/angular_1_router';
import './components/components';
import './models/models';
import './services/services';
import './styles/mdl-icons.css';
import './styles/mdl-amber-blue.css';
import './styles/main.scss';

let app = angular.module('app', [
		  'ngComponentRouter',
			'app.components',
			'app.services',
			'app.models'
		])
		.config(['$locationProvider', ($locationProvider) => {
			$locationProvider.html5Mode(true);
		}])
		.value('$routerRootComponent', 'appRoot')
		.run(() => {
			angular.element(document).ready(() => {
				componentHandler.upgradeAllRegistered();
			});
		});

export default app;