application.factory('todoService', ['$cordovaSQLite', '$q', '$timeout', function($cordovaSQLite, $q, $timeout) {

  var todoListService = {
    // todos: [
    //     // {title: "Take out the trash", username: "Dion", done: true},
    //     // {title: "Do laundry", username: "Dion", done: false},
    //     // {title: "Start cooking dinner", username: "Dion", done: false}
    //  ]
    toArrayObject: function(result){
      var tmp = [];
      for(var i = 0; i < result.rows.length; i++){
        tmp.push(result.rows.item(i));
      }
      return tmp;
    }
  }

  return {
    //todos: todoListService.todos,
    getTodo: function(db, id, options) {
      console.log("todoService id: " + id);
      query = "SELECT rowid AS id, * FROM todo WHERE rowid = ?";
      $cordovaSQLite.execute(db, query, [id]).then(function(result){
        options.onSuccess(todoListService.toArrayObject(result));
      })
    },
    getTodo2: function(db, id, options) {
      console.log("todoService id: " + id);
      query = "SELECT rowid AS id, * FROM todo WHERE rowid = ?";
      $cordovaSQLite.execute(db, query, [id]).then(function(result){
        options.onSuccess(result);
      })
    },
    addTodo: function(db, todo, options){
      var def = $q.defer();
      query = "INSERT INTO todo (username, title, time, done) VALUES (?, ?, ?, ?)";
      $cordovaSQLite.execute(db, query, [todo.username, todo.title, new Date(), 0]).then(function(result){
        console.log("INSERT ID -> " + result.insertId);
        def.resolve(options.onSuccess(result));
      })
      return def.promise;
    },
    getAllTodos: function(db, options){
      query = "SELECT rowid AS id, * FROM todo";
      $cordovaSQLite.execute(db, query, []).then(function(result) {
        //console.log(result.rows);
        $timeout(function(){
            options.onSuccess(todoListService.toArrayObject(result));
        })
      })
    },
    updateTodo: function(db, id, done, options){
      query = "UPDATE todo SET done = ? WHERE rowid = ?";
      $cordovaSQLite.execute(db, query, [done, id]).then(function(result){
        options.onSuccess(todoListService.toArrayObject(result));
      })
    },
    deleteTodo: function(db, id, options){
      query = "DELETE FROM todo WHERE rowid = ?";
      $cordovaSQLite.execute(db, query, [id]).then(function(result){
        options.onSuccess(todoListService.toArrayObject(result));
      })
    },
    deleteAllTodos: function(db, options){
      query = "DELETE FROM todo WHERE rowid > 0";
      $cordovaSQLite.execute(db, query, []).then(function(result){
        options.onSuccess(todoListService.toArrayObject(result));
      })
    }
  }
}])
