import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideCharts, withDefaultRegisterables} from 'ng2-charts';
import {provideHttpClient} from "@angular/common/http";
import {ApolloModule} from "apollo-angular";
import {provideApolloClient} from "./core/providers/provide-apollo-client.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(),
    importProvidersFrom(ApolloModule),
    provideApolloClient(),
    provideCharts(withDefaultRegisterables())
  ]
};
