module.exports = function (plop) {
    // controller generator
    plop.setGenerator('newNotes', {
        description: 'New note!!',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/{{name}}.js',
            templateFile: 'plop-templates/controller.hbs'
        }]
    });
};

