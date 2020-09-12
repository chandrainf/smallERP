import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class MekanikService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEKANIK_UPDATE(
          $id: String!
          $data: MekanikInput!
        ) {
          mekanikUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.mekanikUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEKANIK_DESTROY($ids: [String!]!) {
          mekanikDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.mekanikDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEKANIK_CREATE($data: MekanikInput!) {
          mekanikCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.mekanikCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation MEKANIK_IMPORT(
          $data: MekanikInput!
          $importHash: String!
        ) {
          mekanikImport(
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

    return response.data.mekanikImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query MEKANIK_FIND($id: String!) {
          mekanikFind(id: $id) {
            id
            mekanik
            proyeks {
              id
              kodeProyek
              namaProyek
            }
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.mekanikFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query MEKANIK_LIST(
          $filter: MekanikFilterInput
          $orderBy: MekanikOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          mekanikList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              mekanik
              proyeks {
                id
                kodeProyek
                namaProyek
              }
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

    return response.data.mekanikList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query MEKANIK_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          mekanikAutocomplete(
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

    return response.data.mekanikAutocomplete;
  }
}
