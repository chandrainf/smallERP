import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class CashAdvanceService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_ADVANCE_UPDATE(
          $id: String!
          $data: CashAdvanceInput!
        ) {
          cashAdvanceUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.cashAdvanceUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_ADVANCE_DESTROY($ids: [String!]!) {
          cashAdvanceDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.cashAdvanceDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_ADVANCE_CREATE(
          $data: CashAdvanceInput!
        ) {
          cashAdvanceCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.cashAdvanceCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation CASH_ADVANCE_IMPORT(
          $data: CashAdvanceInput!
          $importHash: String!
        ) {
          cashAdvanceImport(
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

    return response.data.cashAdvanceImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query CASH_ADVANCE_FIND($id: String!) {
          cashAdvanceFind(id: $id) {
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

    return response.data.cashAdvanceFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query CASH_ADVANCE_LIST(
          $filter: CashAdvanceFilterInput
          $orderBy: CashAdvanceOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          cashAdvanceList(
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

    return response.data.cashAdvanceList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query CASH_ADVANCE_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          cashAdvanceAutocomplete(
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

    return response.data.cashAdvanceAutocomplete;
  }
}
