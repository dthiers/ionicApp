application.factory('todoService', ['$cordovaSQLite', function($cordovaSQLite) {

  var todoListService = {
    // todos: [
    //     // {title: "Take out the trash", username: "Dion", done: true},
    //     // {title: "Do laundry", username: "Dion", done: false},
    //     // {title: "Start cooking dinner", username: "Dion", done: false}
    //  ]

  }

  return {
    //todos: todoListService.todos,
    getTodo: function(db, id, options) {
      console.log("todoService id: " + id);
      query = "SELECT rowid AS id, * FROM todo WHERE rowid = ?";
      $cordovaSQLite.execute(db, query, [id]).then(function(result){
        options.onSuccess(result);
      })
    },
    addTodo: function(db, todo, options){
      query = "INSERT INTO todo (username, title, time, done) VALUES (?, ?, ?, ?)";
      $cordovaSQLite.execute(db, query, [todo.username, todo.title, new Date(), 0]).then(function(result){
        console.log("INSERT ID -> " + result.insertId);
        options.onSuccess(result);
      })
    },
    getAllTodos: function(db, options){
      query = "SELECT rowid AS id, * FROM todo";
      $cordovaSQLite.execute(db, query, []).then(function(result) {
        //console.log(result.rows);
        options.onSuccess(result);
      })
    },
    deleteAllTodos: function(db, options){
      query = "DELETE FROM todo WHERE rowid > 0";
      $cordovaSQLite.execute(db, query, []).then(function(result){
        options.onSuccess(result);
      })
    }
  }
}])
