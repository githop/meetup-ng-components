/**
 * Created by githop on 4/7/16.
 */
import './todoList.scss';

class TodoListCtrl {
	constructor() {
		this.$onInit = () => {
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
		this.dialog.close();
	}

	goTo(id) {
		console.log('id', id);
		this.$router.navigate(['Todo', {id}]);
	}

	handleDialog(todo) {
		this.rmTodo = todo;
		this.dialog.showModal();
	}

	closeDialog() {
		console.log(this.dialog);
		if (this.dialog) {
			this.dialog.close();
		}
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
    <h4 class="mdl-dialog__title">Allow data collection?</h4>
    <div class="mdl-dialog__content">
      <p>
        Allowing us to collect data will let us get you the information you want faster.
      </p>
    </div>
    <div class="mdl-dialog__actions">
      <button type="button" ng-click="$ctrl.removeTodo($ctrl.rmTodo)" class="mdl-button">Agree</button>
      <button type="button" ng-click="$ctrl.closeDialog()" class="mdl-button close">Disagree</button>
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

