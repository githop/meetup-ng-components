/**
 * Created by githop on 4/6/16.
 */

class appRootCtrl {
    constructor(todosSrv) {
        'ngInject';
        this.welcome = 'Everything Seems to be in order this wonderful eve!';

        this.$onInit = () => {
            this.todos = todosSrv.fetch;
            this.todoSrv = todosSrv;
        };
    }

    addTodo(todo) {
        this.todoSrv.add(todo);
    }
}


export default {
    controller: appRootCtrl,
    template: `
    <h3>{{$ctrl.welcome}}</h3>

    <input ng-model="new.todo" type="text">
    <button ng-click="$ctrl.addTodo(new.todo)">add</button>
    <gth-todos todos="$ctrl.todos()"></gth-todos>
    `
};