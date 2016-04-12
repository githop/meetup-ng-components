/**
 * Created by githop on 4/6/16.
 */
import './todos.scss';

class TodosCtrl {
	constructor($scope, todosSrv) {
		this.$onInit = () => {
			console.log('TodosCtrl');
			this.$routerOnActivate = next => {
				console.log('Todos routerOnActive');
				this.todos = todosSrv.fetch();
			};
			this.$scope = $scope;
			this.todoSrv = todosSrv;
			this.lblTxt = this.randomTodo();
		};

		this.$postLink = () => {
			//for material design lite js.
			componentHandler.upgradeAllRegistered();
			let inputDiv = document.getElementsByClassName('mdl-textfield');
			$scope.removeIsDirty = removeIsDirty;
			function removeIsDirty() {
				angular.element(inputDiv).removeClass('is-dirty');
			}
		};
	}

	randomTodo() {
		let labels = [
				'Write Meetup Presentation',
				'Pick up groceries',
				'Replace flux capacitor',
				'Fix hyperdrive',
				'Use the force',
				'Learn the force',
				'Salvage scrap parts',
				'Train on Dagobah',
				'Build lightsaber',
				'Visit Jawas to trade',
				'Clean droids',
				'Pay back Jabba',
				'Train Padawan',
				'Head to Mos Eisley Cantina for a drink'
		];

		let randLabel = Math.floor(Math.random() * labels.length);
		return labels[randLabel];
	}

	addTodo(todo) {
		if (todo == null) {
			return;
		}
		this.loading = true;
		this.todoSrv.add(todo)
				.then(todos => {
					this.todos = todos;
					this.$scope.$apply(() => this.loading = false);
				});
		this.$scope.new.todo = ' ';
		this.lblTxt = this.randomTodo();
		//so placeholder text returns, removes is-dirty class from input wrapper div
		// which is added from mdl js for some reason.
		this.$scope.removeIsDirty();
	}

	removeTodo(todo) {
		this.todos = this.todoSrv.remove(todo);
	}

	completed() {
		return this.todos.filter(t => t.done === true).length;
	}
}

TodosCtrl.$inject = ['$scope', 'todosSrv'];
export default {
	controller: TodosCtrl,
	$routeConfig: [
		{path: '/', name: 'Todos', component: 'gthTodoList', useAsDefault: true},
		{path: '/:id', name: 'Todo', component: 'gthTodo'}
	],
	template: `
	<div class="gth-controls mdl-shadow--2dp" ng-hide="$ctrl.active">
		<div class="gth-input">
			<div class="mdl-textfield mdl-js-textfield">
			<label class=" mdl-textfield__label" for="sample1">{{$ctrl.lblTxt}}...</label>
			<input class="gth-input mdl-textfield__input" type="text" ng-model="new.todo" id="sample1">
		</div>
	</div>
	<div class="gth-btn">
	  	<button ng-click="$ctrl.addTodo(new.todo)"
  		class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
  		add
		</button>
	</div>
	<div ng-if="$ctrl.loading"></div>
	<div id="p2" ng-show="$ctrl.loading" class="gth-progress mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
	</div>
		<h4 class="gth-count mdl-typography--display-1">Todo list: <small>{{$ctrl.completed()}} of {{$ctrl.todos.length}} complete</small></h4>
	<ng-outlet></ng-outlet>
	`
};