import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

export function provideApolloClient() {
  return [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: import.meta.env.NG_APP_API_URL,
          }),
        };
      },
      deps: [HttpLink],
    }
  ];
}
