const sqlite3 = require('sqlite3').verbose();
 
let db = new sqlite3.Database('.\db\CSD3313.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the CSD3313 database.');
  });
  
  db.run('CREATE TABLE IF NOT EXISTS employee (employee_id  NUMBER(5) NOT NULL, employee_name   VARCHAR2(255) NOT NULL );',  (err) => {
    if (err) {
      console.log('ERROR!', err)
    }
    else {
        console.log('Table Employee created with success!')
    }
  })

  db.run("INSERT INTO employee (employee_id, employee_name) VALUES (1,'Pedro');",  (err) => {
    if (err) {
      console.log('ERROR!', err)
    }
    else {
        console.log('Employee Karan  created with success!')
    }
})

db.all("SELECT employee_id || ' - ' || employee_name as emp FROM employee;", [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.emp);
  });
});
  /*db.serialize(() => {
    db.each(`SELECT PlaylistId as id,
                    Name as name
             FROM playlists`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + "\t" + row.name);
    });
  });*/
  

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });