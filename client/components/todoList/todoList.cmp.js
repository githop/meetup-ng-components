/**
 * Created by githop on 4/7/16.
 */
import './todoList.scss';

class TodoListCtrl {
	constructor() {
		this.$onInit = () => {
			console.log('TodosListCtrl');
			//for editor directive
			this.todos = this.todosCtrl.todos;
		};
		this.$postLink = () => {
			this.dialog = document.querySelector('dialog');
		};
	}

	removeTodo(todo) {
		this.todosCtrl.removeTodo(todo);
		this.rmTodo = void 0;
		this.closeDialog();
	}

	goTo(id) {
		this.$router.navigate(['Todo', {id}]);
	}

	handleDialog(todo) {
		this.rmTodo = todo;
		this.dialog.showModal();
	}

	closeDialog() {
		if (this.dialog) {
			this.dialog.close();
		}

		let revert = document.querySelector('.do-remove');
		angular.element(revert)
				.css('transition', 'background-color 0.5s ease')
				.css('background-color', 'white')
				.removeClass('do-remove');
	}
}


export default {
	require: {
		todosCtrl: '^gthTodos'
	},
	bindings: {
		$router: '<'
	},
	controller: TodoListCtrl,
	template: `
	  <dialog class="mdl-dialog">
    <h4 class="mdl-dialog__title">Delete Todo?</h4>
    <div class="mdl-dialog__content">
      <p>
      Are you sure you want to delete: {{$ctrl.rmTodo.task}}?
      </p>
    </div>
    <div class="mdl-dialog__actions">
      <button type="button" ng-click="$ctrl.removeTodo($ctrl.rmTodo)" class="mdl-button">Delete</button>
      <button type="button" ng-click="$ctrl.closeDialog()" class="mdl-button close">Cancel</button>
    </div>
  </dialog>

<table class="gth-table mdl-data-table mdl-js-data-table mdl-shadow--2dp">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">id</th>
      <th>task</th>
      <th>complete</th>
    </tr>
  </thead>
  <tbody>
    <tr ng-repeat="todo in $ctrl.todosCtrl.todos track by todo.id"
    	gth-remove-todo on-dialog="$ctrl.handleDialog(rmTodo)">
      <td>{{todo.id}}</td>
      <td>{{todo.task}}</td>
      <td>
      	<i class="material-icons">{{todo.done === true ? 'done' : 'crop_din'}}</i>
      </td>
    </tr>
  </tbody>
</table>
	`
};

