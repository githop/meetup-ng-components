/**
 * Created by githop on 4/6/16.
 */

export default {
	template: `
	<h4>{{$ctrl.todo.task}}</h4>
	Completed? {{$ctrl.todo.done}}
	`,
	//controller: TodoCtrl,
	bindings: {
		todo: '<'
	}
};