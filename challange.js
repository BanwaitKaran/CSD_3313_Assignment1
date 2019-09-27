const sqlite3 = require('sqlite3').verbose();
 
let db = new sqlite3.Database('.\db\CSD3313.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the CSD3313 database.');
  });
  
  db.run('CREATE TABLE IF NOT EXISTS Student (student_id  NUMBER(5) NOT NULL, student_name   VARCHAR2(255) NOT NULL,program_group  VARCHAR2(8) NOT NULL  );',  (err) => {
    if (err) {
      console.log('ERROR!', err)
    }
    else {
        console.log('Table Student created with success!')
    }
  })
  db.run('CREATE TABLE IF NOT EXISTS Class (class_id  NUMBER(5) NOT NULL, class_name   VARCHAR2(255) NOT NULL,date  date(8) ,room varchar2(10)  );',  (err) => {
    if (err) {
      console.log('ERROR!', err)
    }
    else {
        console.log('Table Class created with success!')
    }
  })
  db.run('CREATE TABLE IF NOT EXISTS Enrollment (enroll_id  NUMBER(5) NOT NULL, student_id  NUMBER(5) ,class_id NUMBER(5)  );',  (err) => {
    if (err) {
      console.log('ERROR!', err)
    }
    else {
        console.log('Table Enrollment created with success!')
    }
  })

  

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });