/**
 * Created by githop on 4/6/16.
 */


import angular from 'angular';

import todosService from './todos.service';

let services = angular.module('app.services', [])
	.factory('todosSrv', todosService);