/**
 * Created by githop on 4/6/16.
 */

import angular from 'angular';
import appRoot from './appRoot/appRoot.cmp';
import gthTodos from './todos/todos.cmp';
import gthTodo from './todo/todo.cmp';
import gthTodoList from './todoList/todoList.cmp';
import gthTodoEditor from './todoEditor/todoEditor.cmp';

let components = angular.module('app.components', [])
	.component('appRoot', appRoot)
	.component('gthTodoList', gthTodoList)
	.component('gthTodos', gthTodos)
	.component('gthTodo', gthTodo)
	.component('gthTodoEditor', gthTodoEditor);