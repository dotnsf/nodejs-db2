# dashDB sample for Node.js

## Restriction

This program use [ibm_db](https://www.npmjs.com/package/ibm_db) npm library, and this library use IBM DB2 ODBC Driver in it. So your system has to be supported by IBM DB2. You can use Windows/Ubuntu/MacOSX/..., but you can NOT use Raspberry Pi for example.

## Install

- $ git clone https://github.com/dotnsf/nodejs-db2

- $ cd nodejs-db2

- $ npm install ibm_db

    - This command install IBM DB2 ODBC CLI Driver.

- edit settings.js with your DB2/dashDB information.

## Execute

- $ node sample.js

## Licensing

This code is licensed under MIT.

## Copyright

2017 K.Kimura @ Juge.Me all rights reserved.


