import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class DeklarasiService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DEKLARASI_UPDATE(
          $id: String!
          $data: DeklarasiInput!
        ) {
          deklarasiUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.deklarasiUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DEKLARASI_DESTROY($ids: [String!]!) {
          deklarasiDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.deklarasiDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DEKLARASI_CREATE($data: DeklarasiInput!) {
          deklarasiCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.deklarasiCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DEKLARASI_IMPORT(
          $data: DeklarasiInput!
          $importHash: String!
        ) {
          deklarasiImport(
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

    return response.data.deklarasiImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query DEKLARASI_FIND($id: String!) {
          deklarasiFind(id: $id) {
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

    return response.data.deklarasiFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query DEKLARASI_LIST(
          $filter: DeklarasiFilterInput
          $orderBy: DeklarasiOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          deklarasiList(
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

    return response.data.deklarasiList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query DEKLARASI_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          deklarasiAutocomplete(
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

    return response.data.deklarasiAutocomplete;
  }
}
