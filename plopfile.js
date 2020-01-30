const getDate = () => {
  let today = new Date()
  const dd = `${today.getDate()}`
  const mm = `${(today.getMonth() + 1)}`
  const yy = today.getFullYear()

  return `"${mm}/${dd}/${yy}"`
}

module.exports = function (plop) {
    // controller generator
    plop.setGenerator('newNotes', {
        description: 'New note!!',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter lecture name (i.e Intro to Kubernetes)'
        },
        {
           type: 'input',
           name: 'lecturer',
           message: 'Enter the name of the lecturer (i.e John Doe)'
        },
        {
           type: 'input',
           name: 'date',
           message: `Enter today\'s date ${getDate()}`
        }],
        actions: [{
            type: 'add',
            path: 'lectures/{{name}}/README.md',
            templateFile: 'plop-templates/notes.hbs'
        }]
    });
};

