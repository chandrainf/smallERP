import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class SatuanService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SATUAN_UPDATE(
          $id: String!
          $data: SatuanInput!
        ) {
          satuanUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.satuanUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SATUAN_DESTROY($ids: [String!]!) {
          satuanDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.satuanDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SATUAN_CREATE($data: SatuanInput!) {
          satuanCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.satuanCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SATUAN_IMPORT(
          $data: SatuanInput!
          $importHash: String!
        ) {
          satuanImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.satuanImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SATUAN_FIND($id: String!) {
          satuanFind(id: $id) {
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

    return response.data.satuanFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SATUAN_LIST(
          $filter: SatuanFilterInput
          $orderBy: SatuanOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          satuanList(
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

    return response.data.satuanList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SATUAN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          satuanAutocomplete(query: $query, limit: $limit) {
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

    return response.data.satuanAutocomplete;
  }
}
