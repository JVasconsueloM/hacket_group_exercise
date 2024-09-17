import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { EnvironmentProviders, Provider } from '@angular/core';

export function provideApolloClient(): Provider | EnvironmentProviders {
  return [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink): unknown {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: import.meta.env.NG_APP_API_URL,
          }),
        };
      },
      deps: [HttpLink],
    },
  ];
}
