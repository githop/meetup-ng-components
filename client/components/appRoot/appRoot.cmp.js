/**
 * Created by githop on 4/6/16.
 */

class appRootCtrl {
    constructor(todos) {
        'ngInject';
        this.welcome = 'Everything Seems to be in order this wonderful eve!';

        this.$onInit = () => {
            this.todos = todos.fetch();
            console.log('todos??', this.todos);
        };
    }
}


export default {
    template: `
    <h3>{{$ctrl.welcome}}</h3>

    <gth-todos todos="$ctrl.todos"></gth-todos>
    `,
    controller: appRootCtrl
};