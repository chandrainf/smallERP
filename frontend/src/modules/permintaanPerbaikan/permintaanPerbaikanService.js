import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class PermintaanPerbaikanService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERMINTAAN_PERBAIKAN_UPDATE(
          $id: String!
          $data: PermintaanPerbaikanInput!
        ) {
          permintaanPerbaikanUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.permintaanPerbaikanUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERMINTAAN_PERBAIKAN_DESTROY(
          $ids: [String!]!
        ) {
          permintaanPerbaikanDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.permintaanPerbaikanDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERMINTAAN_PERBAIKAN_CREATE(
          $data: PermintaanPerbaikanInput!
        ) {
          permintaanPerbaikanCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.permintaanPerbaikanCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation PERMINTAAN_PERBAIKAN_IMPORT(
          $data: PermintaanPerbaikanInput!
          $importHash: String!
        ) {
          permintaanPerbaikanImport(
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

    return response.data.permintaanPerbaikanImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query PERMINTAAN_PERBAIKAN_FIND($id: String!) {
          permintaanPerbaikanFind(id: $id) {
            id
            daftarAlat {
              id
              namaAlat
            }
            proyek {
              id
              kodeProyek
              namaProyek
            }
            mekanik {
              id
              mekanik
            }
            diketahui
            disetujui
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.permintaanPerbaikanFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query PERMINTAAN_PERBAIKAN_LIST(
          $filter: PermintaanPerbaikanFilterInput
          $orderBy: PermintaanPerbaikanOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          permintaanPerbaikanList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              daftarAlat {
                id
                namaAlat
              }
              proyek {
                id
                kodeProyek
                namaProyek
              }
              mekanik {
                id
                mekanik
              }
              diketahui
              disetujui
              createdAt
              updatedAt
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

    return response.data.permintaanPerbaikanList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query PERMINTAAN_PERBAIKAN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          permintaanPerbaikanAutocomplete(
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

    return response.data.permintaanPerbaikanAutocomplete;
  }
}
