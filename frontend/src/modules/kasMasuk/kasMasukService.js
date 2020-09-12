import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class KasMasukService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_MASUK_UPDATE(
          $id: String!
          $data: KasMasukInput!
        ) {
          kasMasukUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.kasMasukUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_MASUK_DESTROY($ids: [String!]!) {
          kasMasukDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.kasMasukDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_MASUK_CREATE($data: KasMasukInput!) {
          kasMasukCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.kasMasukCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KAS_MASUK_IMPORT(
          $data: KasMasukInput!
          $importHash: String!
        ) {
          kasMasukImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.kasMasukImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query KAS_MASUK_FIND($id: String!) {
          kasMasukFind(id: $id) {
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

    return response.data.kasMasukFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query KAS_MASUK_LIST(
          $filter: KasMasukFilterInput
          $orderBy: KasMasukOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          kasMasukList(
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

    return response.data.kasMasukList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query KAS_MASUK_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          kasMasukAutocomplete(query: $query, limit: $limit) {
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

    return response.data.kasMasukAutocomplete;
  }
}
