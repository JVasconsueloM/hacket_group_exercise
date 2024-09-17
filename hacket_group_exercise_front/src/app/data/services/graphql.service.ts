import {Injectable} from '@angular/core';
import {Apollo} from "apollo-angular";
import {lastValueFrom} from "rxjs";
import {ApolloQueryResult, TypedDocumentNode} from "@apollo/client";

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(
    private apollo: Apollo
  ) {
  }

  executeQuery<T>(query: TypedDocumentNode<unknown, unknown>): Promise<T> {
    return lastValueFrom(this.apollo
      .query({
        query: query,
      })).then((response: ApolloQueryResult<unknown>) => response.data) as Promise<T>
  }
}
