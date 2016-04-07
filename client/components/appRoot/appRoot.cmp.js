/**
 * Created by githop on 4/6/16.
 */

class appRootCtrl {
    constructor(todos) {
        'ngInject';
        this.welcome = 'Everything Seems to be in order this wonderful eve!';

        this.$onInit = () => {
            this.todos = todos.fetch;
            this.todoSrv = todos;
        };

        this.$onChanges = (changeObj) => {
            console.log('root changes', changeObj);
        };
    }

    addTodo(todo) {
        this.todoSrv.add(todo);
    }
}


export default {
    template: `
    <h3>{{$ctrl.welcome}}</h3>

    <input ng-model="new.todo" type="text">
    <button ng-click="$ctrl.addTodo(new.todo)">add</button>
    <gth-todos todos="$ctrl.todos()"></gth-todos>
    `,
    controller: appRootCtrl
};