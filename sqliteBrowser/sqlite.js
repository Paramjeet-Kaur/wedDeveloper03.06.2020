var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('C:\\Users\\Parneet kaur Jattana\\sqliteBrowser\\SQLiteDatabaseBrowserPortable\\Data\\januarythirtyone.db');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT StudentId, FName FROM students", function(err, row) {
      console.log(row.StudentId + ": " + row.FName);
  });
});
