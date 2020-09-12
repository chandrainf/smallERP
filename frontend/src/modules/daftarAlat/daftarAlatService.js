import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class DaftarAlatService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DAFTAR_ALAT_UPDATE(
          $id: String!
          $data: DaftarAlatInput!
        ) {
          daftarAlatUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.daftarAlatUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DAFTAR_ALAT_DESTROY($ids: [String!]!) {
          daftarAlatDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.daftarAlatDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DAFTAR_ALAT_CREATE(
          $data: DaftarAlatInput!
        ) {
          daftarAlatCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.daftarAlatCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation DAFTAR_ALAT_IMPORT(
          $data: DaftarAlatInput!
          $importHash: String!
        ) {
          daftarAlatImport(
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

    return response.data.daftarAlatImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query DAFTAR_ALAT_FIND($id: String!) {
          daftarAlatFind(id: $id) {
            id
            kodeAlat
            namaAlat
            merk
            model
            kapasitas
            nomorRangka
            nomorMesin
            nomorPlat
            tahunPembuatan
            tahunRegistrasi
            proyek {
              id
              kodeProyek
              namaProyek
            }
            status
            kepemilikan
            SIA
            STNK
            pajak
            KIR
            foto {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
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

    return response.data.daftarAlatFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query DAFTAR_ALAT_LIST(
          $filter: DaftarAlatFilterInput
          $orderBy: DaftarAlatOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          daftarAlatList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              kodeAlat
              namaAlat
              merk
              model
              kapasitas
              nomorRangka
              nomorMesin
              nomorPlat
              tahunPembuatan
              tahunRegistrasi
              proyek {
                id
                kodeProyek
                namaProyek
              }
              status
              kepemilikan
              SIA
              STNK
              pajak
              KIR
              foto {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
              }
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

    return response.data.daftarAlatList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query DAFTAR_ALAT_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          daftarAlatAutocomplete(
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

    return response.data.daftarAlatAutocomplete;
  }
}
