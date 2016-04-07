/**
 * Created by githop on 4/6/16.
 */

import angular from 'angular';

import TodoModel from './todo.model';

let models = angular.module('app.models', [])
.factory('TodoModel', TodoModel);