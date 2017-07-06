var ibm_db = require( 'ibm_db' );
var settings = require( './settings' );

var db_str = "DATABASE=" + settings.db_name
  + ";HOSTNAME=" + settings.db_host
  + ";UID=" + settings.db_username
  + ";PWD=" + settings.db_password
  + ";PORT=" + settings.db_port
  + ";PROTOCOL=TCPIP";
var sql = 'select OBJECTID, NAME from SAMPLES.GEO_CUSTOMER limit 10';
ibm_db.open( db_str, function( err, conn ){
  if( err ) return console.log( err );

  conn.query( sql, function( err, data ){
    if( err ) console.log( err );
    else console.log( data );

    conn.close( function(){
      console.log( 'done.' );
    });
  });
});

