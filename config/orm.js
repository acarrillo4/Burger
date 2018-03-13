// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function qMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = `'${value}'`;
        }
        arr.push(`${key}=${value}`);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
// Object for all our SQL statement functions
var orm = {
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table};`, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // cols and vals get passed as arrays so .toString will turn cols lists into strings
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += qMarks(vals.length);
        queryString += ") ";
    
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // objColVals = {
        // key1: value1,
        // key2: value2
    // }
    updateOne: function(table, objColVals, condition, cb) {
        connection.query(`UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`,
        function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;