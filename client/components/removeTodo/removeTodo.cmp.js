/**
 * Created by githop on 4/9/16.
 */



export default ['$interval','$timeout', ($interval, $timeout) => {
	return {
		require: {
			todoListCtrl: '^gthTodoList'
		},
		scope: {
			onDialog: '&',
			onRevert: '&'
		},
		link: (scope, elm, attrs, ctrl) => {
			let start, stop;
			let dialog = document.querySelector('dialog');

			function cssTransitionColor(color, time) {
				elm.css('transition', `background-color ${time}s ease`);
				elm.css('background-color', color);
			}

			elm.bind('mousedown', (ev) => {
				let count = 0;
				let downTime = $interval(() => ++count);
				start = ev.timeStamp;
				$timeout(() => {
					cssTransitionColor('red', 1.0);
					elm.addClass('do-remove');
				}, 250);
				let showDialog = scope.$watch(() => count, (newVal, oldVal) => {
					//console.log('watching', newVal);
					if (newVal !== oldVal && newVal >= 200) {
						let rmTodo = ctrl.todoListCtrl.todos[scope.$parent.$index];
						scope.onDialog({rmTodo});
						showDialog();
						$interval.cancel(downTime);
					}
				});
			});

			elm.bind('mouseup', (ev) => {
				stop = ev.timeStamp;
				let delta = stop - start;
				if (delta < 1000) {
					ctrl.todoListCtrl.goTo(++scope.$parent.$index);
				}
			});
		}
	};
}];
