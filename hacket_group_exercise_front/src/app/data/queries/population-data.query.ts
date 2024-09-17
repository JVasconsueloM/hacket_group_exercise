import { gql } from 'apollo-angular';
import { TypedDocumentNode } from '@apollo/client';

export const populationDataQuery: TypedDocumentNode<unknown, unknown> = gql`
  query {
    population {
      state
      year
      amount: populationAmount
    }
  }
`;
