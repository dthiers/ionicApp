application.factory('webSqlService', function(){

  db = window.openDatabase('todolist', '1.0', 'database for todos', 2 * 1024 * 1024);

  db.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS todo (INTEGER PRIMARY KEY, username text, title text, time, done integer)');
    //tx.executeSql('INSERT INTO todos (username, description, time, done) VALUES ("Dion", "Test", "CURRENT_TIMESTAMP", 0)');
  })

  return {
    insertTodo: function(todo){
      db.transaction(function(tx){
        console.log(todo.username);
        tx.executeSql('INSERT INTO todo (username, description, time, done) VALUES (?, ?, ?, ?)', [todo.username, todo.title, 'CURRENT_TIMESTAMP', 0]);
      })
    },
    getTodo: function(key){

    },
    getAllTodos: function(){
      db.transaction(function(tx){
        tx.executeSql('SELECT * FROM todo', [], function(tx, results){
          console.log(results.rows.length);
          var len = results.rows.length, i;
            for (i = 0; i < len; i++) {
              //alert(results.rows.item(i).text);
              console.log(results.rows.item(i));
            }
        })
      })
    }
  }
})
