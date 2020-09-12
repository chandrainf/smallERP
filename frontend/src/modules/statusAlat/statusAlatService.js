import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class StatusAlatService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STATUS_ALAT_UPDATE(
          $id: String!
          $data: StatusAlatInput!
        ) {
          statusAlatUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.statusAlatUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STATUS_ALAT_DESTROY($ids: [String!]!) {
          statusAlatDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.statusAlatDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STATUS_ALAT_CREATE(
          $data: StatusAlatInput!
        ) {
          statusAlatCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.statusAlatCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation STATUS_ALAT_IMPORT(
          $data: StatusAlatInput!
          $importHash: String!
        ) {
          statusAlatImport(
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

    return response.data.statusAlatImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query STATUS_ALAT_FIND($id: String!) {
          statusAlatFind(id: $id) {
            id
            status
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.statusAlatFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query STATUS_ALAT_LIST(
          $filter: StatusAlatFilterInput
          $orderBy: StatusAlatOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          statusAlatList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              status
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

    return response.data.statusAlatList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query STATUS_ALAT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          statusAlatAutocomplete(
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

    return response.data.statusAlatAutocomplete;
  }
}
