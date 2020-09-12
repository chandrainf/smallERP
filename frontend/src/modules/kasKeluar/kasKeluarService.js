import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class KasKeluarService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_KELUAR_UPDATE(
          $id: String!
          $data: KasKeluarInput!
        ) {
          kasKeluarUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.kasKeluarUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_KELUAR_DESTROY($ids: [String!]!) {
          kasKeluarDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.kasKeluarDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_KELUAR_CREATE($data: KasKeluarInput!) {
          kasKeluarCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.kasKeluarCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_KELUAR_IMPORT(
          $data: KasKeluarInput!
          $importHash: String!
        ) {
          kasKeluarImport(
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

    return response.data.kasKeluarImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query KAS_KELUAR_FIND($id: String!) {
          kasKeluarFind(id: $id) {
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

    return response.data.kasKeluarFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query KAS_KELUAR_LIST(
          $filter: KasKeluarFilterInput
          $orderBy: KasKeluarOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          kasKeluarList(
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

    return response.data.kasKeluarList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query KAS_KELUAR_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          kasKeluarAutocomplete(
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

    return response.data.kasKeluarAutocomplete;
  }
}
