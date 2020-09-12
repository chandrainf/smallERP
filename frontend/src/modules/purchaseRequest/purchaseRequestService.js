import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class PurchaseRequestService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PURCHASE_REQUEST_UPDATE(
          $id: String!
          $data: PurchaseRequestInput!
        ) {
          purchaseRequestUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.purchaseRequestUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PURCHASE_REQUEST_DESTROY(
          $ids: [String!]!
        ) {
          purchaseRequestDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.purchaseRequestDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PURCHASE_REQUEST_CREATE(
          $data: PurchaseRequestInput!
        ) {
          purchaseRequestCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.purchaseRequestCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PURCHASE_REQUEST_IMPORT(
          $data: PurchaseRequestInput!
          $importHash: String!
        ) {
          purchaseRequestImport(
            data: $data
            importHash: $importHash
          )
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.purchaseRequestImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PURCHASE_REQUEST_FIND($id: String!) {
          purchaseRequestFind(id: $id) {
            id
            nama
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.purchaseRequestFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PURCHASE_REQUEST_LIST(
          $filter: PurchaseRequestFilterInput
          $orderBy: PurchaseRequestOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          purchaseRequestList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              nama
              updatedAt
              createdAt
            }
          }
        }
      `,

      variables: {
        filter,
        orderBy,
        limit,
        offset,
      },
    });

    return response.data.purchaseRequestList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PURCHASE_REQUEST_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          purchaseRequestAutocomplete(
            query: $query
            limit: $limit
          ) {
            id
            label
          }
        }
      `,

      variables: {
        query,
        limit,
      },
    });

    return response.data.purchaseRequestAutocomplete;
  }
}
