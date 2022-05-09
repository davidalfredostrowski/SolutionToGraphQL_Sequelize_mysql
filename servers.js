 cat server.js
const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');

const resolvers = require('./graphql/resolvers');
const typeDefs =  gql(fs.readFileSync('./graphql/typeDefs.graphql', {encoding: 'utf-8'}));

const server = new ApolloServer({typeDefs, resolvers,cors: { origin: true }});
//const server = new ApolloServer({
//        typeDefs,
//        resolvers,
//        cors: {
//                    origin: true
//    },
//        dataSources: () => {
//                    return {
//        courseAPI: new CourseAPI({
//        client: 'pg',
//        connection: {
//          host: 'ec2-35-85-30-254.us-west-2.compute.amazonaws.com',
// /         user: 'pmauser',
//          password: 'JunkcrunkJunkcrunk22$$',
 //         database: 'graphbook_dev'
//                                                                  }
//                                                })
//                                }
//                  }
//})



server.listen(5000).then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`);
});
ubuntu@ip-172-31-33-160:~/graphbook$
