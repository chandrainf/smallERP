import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class SparepartService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPAREPART_UPDATE(
          $id: String!
          $data: SparepartInput!
        ) {
          sparepartUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.sparepartUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPAREPART_DESTROY($ids: [String!]!) {
          sparepartDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.sparepartDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPAREPART_CREATE($data: SparepartInput!) {
          sparepartCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.sparepartCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SPAREPART_IMPORT(
          $data: SparepartInput!
          $importHash: String!
        ) {
          sparepartImport(
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

    return response.data.sparepartImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SPAREPART_FIND($id: String!) {
          sparepartFind(id: $id) {
            id
            partNumber
            item
            merk
            satuan {
              id
              nama
            }
            harga
            stok
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

    return response.data.sparepartFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SPAREPART_LIST(
          $filter: SparepartFilterInput
          $orderBy: SparepartOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          sparepartList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              partNumber
              item
              merk
              satuan {
                id
                nama
              }
              harga
              stok
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

    return response.data.sparepartList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SPAREPART_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          sparepartAutocomplete(
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

    return response.data.sparepartAutocomplete;
  }
}
