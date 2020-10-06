const mongoose = require('./db/mongoose');
const Task = require('./models/task');

Task.findByIdAndDelete('5f6e6ef9c10b5e343ed3b2ea').then( (task) => {
    return Task.countDocuments( {completed: false} );
}).then( (result) => {
    console.log(result);
}).catch( (error) => {
    console.log(error);
})
