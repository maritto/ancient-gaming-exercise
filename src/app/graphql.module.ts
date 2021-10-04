import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const uri = '://api-staging.csgoroll.com/graphql';
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  const http = httpLink.create({ uri: `https${uri}`, withCredentials: true });

  const ws = new WebSocketLink({
    uri: `wss${uri}`,
    options: {
      reconnect: true
    }
  });

  const link = split(
    ({ query }) => {
      const data = getMainDefinition(query);
      return (data.kind === 'OperationDefinition' && data.operation === 'subscription');
    },
    ws,
    http
  );

  return {
    link,
    cache: new InMemoryCache(),
    connectToDevTools: true
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
