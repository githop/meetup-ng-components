/**
 * Created by githop on 4/7/16.
 */


class TodoEditor {
	constructor($rootRouter, $timeout) {
		this.$onInit = () => {
			this.$router = $rootRouter;
			console.log('TodoEditorCtrl');
		};

		this.$onChanges = changeObj => {
			console.log('changes!', changeObj);
		};

		this.$postLink = () => {
			//for material design lite js
			let checkBox = document.querySelector('.gth-checkbox');
			$timeout(() => {
				componentHandler.upgradeAllRegistered();
				if (this.done) {
					angular.element(checkBox).addClass('is-checked');
				}
			});
		};
	}
	update(todo) {
		this.onUpdate({task: todo.task});
	}

	back() {
		this.$router.navigate(['Todos']);
	}
}

TodoEditor.$inject = ['$rootRouter', '$timeout'];

export default {
	controller: TodoEditor,
	bindings: {
		done: '<',
		onComplete: '&',
		onUpdate: '&'
	},
	template: `
			<div class="gth-edit-controls">

				<div class="gth-checkbox-group">
					<div class="gth-checkbox">
						<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-1">
						<input
							type="checkbox"
							id="checkbox-1"
							class="mdl-checkbox__input"
							ng-model="$ctrl.done"
							ng-change="$ctrl.onComplete()">
					</label>
					</div>

					<div class="gth-checkbox-label">
						Complete?
					</div>

				</div>
			<div class="mdl-textfield mdl-js-textfield">
				<label class=" mdl-textfield__label" for="task">Update Task...</label>
					<input
						class="gth-input mdl-textfield__input"
						type="text"
						ng-model="new.task" type="text"
						ng-change="$ctrl.update({task: new.task})"
						id="task">
			</div>
	</div>
	<div class="gth-btn">
	  	<button ng-click="$ctrl.back()"
  		class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
  		back
		</button>
	</div>
	`
};