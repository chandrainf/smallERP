import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class CashPaymentService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_PAYMENT_UPDATE(
          $id: String!
          $data: CashPaymentInput!
        ) {
          cashPaymentUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.cashPaymentUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_PAYMENT_DESTROY($ids: [String!]!) {
          cashPaymentDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.cashPaymentDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_PAYMENT_CREATE(
          $data: CashPaymentInput!
        ) {
          cashPaymentCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.cashPaymentCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_PAYMENT_IMPORT(
          $data: CashPaymentInput!
          $importHash: String!
        ) {
          cashPaymentImport(
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

    return response.data.cashPaymentImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query CASH_PAYMENT_FIND($id: String!) {
          cashPaymentFind(id: $id) {
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

    return response.data.cashPaymentFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query CASH_PAYMENT_LIST(
          $filter: CashPaymentFilterInput
          $orderBy: CashPaymentOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          cashPaymentList(
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

    return response.data.cashPaymentList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query CASH_PAYMENT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          cashPaymentAutocomplete(
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

    return response.data.cashPaymentAutocomplete;
  }
}
