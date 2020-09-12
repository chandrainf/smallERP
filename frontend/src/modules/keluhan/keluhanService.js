import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class KeluhanService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KELUHAN_UPDATE(
          $id: String!
          $data: KeluhanInput!
        ) {
          keluhanUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.keluhanUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KELUHAN_DESTROY($ids: [String!]!) {
          keluhanDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.keluhanDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KELUHAN_CREATE($data: KeluhanInput!) {
          keluhanCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.keluhanCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation KELUHAN_IMPORT(
          $data: KeluhanInput!
          $importHash: String!
        ) {
          keluhanImport(
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

    return response.data.keluhanImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query KELUHAN_FIND($id: String!) {
          keluhanFind(id: $id) {
            id
            keluhan
            analisa
            foto {
              id
              name
              sizeInBytes
              publicUrl
              privateUrl
            }
            tindakan
            pemeriksaan
            keterangan
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.keluhanFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query KELUHAN_LIST(
          $filter: KeluhanFilterInput
          $orderBy: KeluhanOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          keluhanList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              keluhan
              analisa
              foto {
                id
                name
                sizeInBytes
                publicUrl
                privateUrl
              }
              tindakan
              pemeriksaan
              keterangan
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

    return response.data.keluhanList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query KELUHAN_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          keluhanAutocomplete(
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

    return response.data.keluhanAutocomplete;
  }
}
