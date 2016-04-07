/**
 * Created by githop on 4/6/16.
 */

export default (TodoModel) => {
	'ngInject';
	return {
		fetch: fetch
	};

	function fetch() {
		return [new TodoModel('use domain objects')];
	}

}