import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello inside resolver';
      },
      hi: () => {
        return 'Hello inside resolver';
      },
    },
  },
});

server.listen(4003).then(({ url }) => console.log(`Server on ${url}`));
