/**
 * Created by githop on 4/6/16.
 */

export default () => {
	return class TodoModel {
		constructor(task, done = false) {
			this.task = task;
			this.done = done;
		}
	};
};