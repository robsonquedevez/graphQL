const db_users = [
    { id: 1, name: 'John Due', email: 'jhon@email.com' },
    { id: 2, name: 'Mikael Scot', email: 'mikael@email.com' }
];

module.exports = {
    Query: {
        users: () => db_users,
        user: (_, { id }) => db_users.filter( user => user.id == id)[0]
    },

    Mutation: {
        createUser: (_, { name, email }) => {
            db_users.push({
                id: 3,
                name,
                email
            });         
        }
    }
}