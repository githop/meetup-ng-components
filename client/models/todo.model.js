/**
 * Created by githop on 4/6/16.
 */

export default () => {
	return class TodoModel {
		constructor(task, id, done = false) {
			this._task = task;
			this._id = id;
			this._done = done;
		}

		get id() {
			return this._id;
		}

		get task() {
			return this._task;
		}

		get done() {
			return this._done;
		}

		update(task) {
			if (task != null) {
				this._task = task;
			}
		}

		complete() {
			this._done = !this._done;
		}

	};
};
