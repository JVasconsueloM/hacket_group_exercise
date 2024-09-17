import { gql } from 'apollo-angular';
import { TypedDocumentNode } from '@apollo/client';

export const vehicleOwnershipQuery: TypedDocumentNode<unknown, unknown> = gql`
  {
    vehicleOwnership {
      vehiclesAvailable
      percentage
    }
  }
`;
