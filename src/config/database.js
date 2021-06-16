module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'lportal',
    define: {
        timestamps: true,
        createdAt: 'createdate',
        updatedAt: false,
        freezeTableName: true
    },
};