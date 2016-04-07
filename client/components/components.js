/**
 * Created by githop on 4/6/16.
 */


import angular from 'angular';
import appRoot from './appRoot/appRoot.cmp';


let components = angular.module('app.components', [])
.component('appRoot', appRoot);