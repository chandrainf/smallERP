import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class ProyekService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROYEK_UPDATE(
          $id: String!
          $data: ProyekInput!
        ) {
          proyekUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.proyekUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROYEK_DESTROY($ids: [String!]!) {
          proyekDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.proyekDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROYEK_CREATE($data: ProyekInput!) {
          proyekCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.proyekCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PROYEK_IMPORT(
          $data: ProyekInput!
          $importHash: String!
        ) {
          proyekImport(data: $data, importHash: $importHash)
        }
      `,

      variables: {
        data: values,
        importHash,
      },
    });

    return response.data.proyekImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PROYEK_FIND($id: String!) {
          proyekFind(id: $id) {
            id
            kodeProyek
            namaProyek
            lokasi
            mekaniks {
              id
              mekanik
            }
            alat {
              id
              namaAlat
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

    return response.data.proyekFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PROYEK_LIST(
          $filter: ProyekFilterInput
          $orderBy: ProyekOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          proyekList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              kodeProyek
              namaProyek
              lokasi
              mekaniks {
                id
                mekanik
              }
              alat {
                id
                namaAlat
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

    return response.data.proyekList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PROYEK_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          proyekAutocomplete(query: $query, limit: $limit) {
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

    return response.data.proyekAutocomplete;
  }
}
