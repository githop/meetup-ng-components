/**
 * Created by githop on 4/6/16.
 */

class appRootCtrl {
    constructor($scope, todosSrv) {
        'ngInject';
        this.welcome = 'Everything Seems to be in order this wonderful eve!';

        this.$onInit = () => {
            this.todos = todosSrv.fetch();
            this.todoSrv = todosSrv;
            this.$scope = $scope;
        };
    }

    addTodo(todo) {
        this.todoSrv.add(todo).then(todos => this.todos = todos);
        this.$scope.new.todo = '';
    }

    removeTodo(todo) {
        this.todos = this.todoSrv.remove(todo.rm);
    }

    completed() {
        return this.todos.filter(t => t.done === true).length
    };
}

export default {
    controller: appRootCtrl,
    template: `
    <h3>{{$ctrl.welcome}}</h3>

    {{$ctrl.completed()}} of {{$ctrl.todos.length}} done!
    <input ng-model="new.todo" type="text">
    <button ng-click="$ctrl.addTodo(new.todo)">add</button>
    <gth-todos todos="$ctrl.todos" on-remove="$ctrl.removeTodo(rm)"></gth-todos>
    `
};