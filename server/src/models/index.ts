const { qgl } = require("apollo-server-express");
const typeDefs: any = qgl`
    type Book {
        id: ID
        name: String
        title: String
    
    }
    type Query {
        books:[Book]
`;
module.exports = typeDefs;
