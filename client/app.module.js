/**
 * Created by githop on 4/6/16.
 */

import angular from 'angular';
import './components/components';
import './models/models';
import './services/services';

let app = angular.module('app', [
    'app.components',
    'app.services',
    'app.models'
]);

export default app;