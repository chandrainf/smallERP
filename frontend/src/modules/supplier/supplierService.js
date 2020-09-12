import gql from 'graphql-tag';
import graphqlClient from 'modules/shared/graphql/graphqlClient';

export default class SupplierService {
  static async update(id, data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUPPLIER_UPDATE(
          $id: String!
          $data: SupplierInput!
        ) {
          supplierUpdate(id: $id, data: $data) {
            id
          }
        }
      `,

      variables: {
        id,
        data,
      },
    });

    return response.data.supplierUpdate;
  }

  static async destroyAll(ids) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUPPLIER_DESTROY($ids: [String!]!) {
          supplierDestroy(ids: $ids)
        }
      `,

      variables: {
        ids,
      },
    });

    return response.data.supplierDestroy;
  }

  static async create(data) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUPPLIER_CREATE($data: SupplierInput!) {
          supplierCreate(data: $data) {
            id
          }
        }
      `,

      variables: {
        data,
      },
    });

    return response.data.supplierCreate;
  }

  static async import(values, importHash) {
    const response = await graphqlClient.mutate({
      mutation: gql`
        mutation SUPPLIER_IMPORT(
          $data: SupplierInput!
          $importHash: String!
        ) {
          supplierImport(
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

    return response.data.supplierImport;
  }

  static async find(id) {
    const response = await graphqlClient.query({
      query: gql`
        query SUPPLIER_FIND($id: String!) {
          supplierFind(id: $id) {
            id
            namaSupplier
            alamat
            telepon1
            telepon2
            email
            createdAt
            updatedAt
          }
        }
      `,

      variables: {
        id,
      },
    });

    return response.data.supplierFind;
  }

  static async list(filter, orderBy, limit, offset) {
    const response = await graphqlClient.query({
      query: gql`
        query SUPPLIER_LIST(
          $filter: SupplierFilterInput
          $orderBy: SupplierOrderByEnum
          $limit: Int
          $offset: Int
        ) {
          supplierList(
            filter: $filter
            orderBy: $orderBy
            limit: $limit
            offset: $offset
          ) {
            count
            rows {
              id
              namaSupplier
              alamat
              telepon1
              telepon2
              email
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

    return response.data.supplierList;
  }

  static async listAutocomplete(query, limit) {
    const response = await graphqlClient.query({
      query: gql`
        query SUPPLIER_AUTOCOMPLETE(
          $query: String
          $limit: Int
        ) {
          supplierAutocomplete(
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

    return response.data.supplierAutocomplete;
  }
}
