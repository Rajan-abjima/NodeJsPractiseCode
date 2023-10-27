const config = {
     server: 'localhost\\MSSQLSERVER01',
     database: 'HREmployeeManagementDB',
     options: {
        trustedConnection: true,
        enableArithAbort: true
     },
     port : 53283
}

module.exports = config;