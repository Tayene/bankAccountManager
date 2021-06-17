module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234',
    database: 'new_db',
    define: {
        timestamps: true,
        createdAt: 'createdate',
        updatedAt: false,
        freezeTableName: true
    },
};