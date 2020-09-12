/**
 * Maps all the Schema of the application.
 * More about the schema: https://www.apollographql.com/docs/graphql-tools/generate-schema/
 */

const makeExecutableSchema = require('graphql-tools')
  .makeExecutableSchema;
const resolvers = require('./resolvers');

const sharedTypes = require('./shared/types');

const settingsTypes = require('./settings/types');
const settingsQueries = require('./settings/queries');
const settingsMutations = require('./settings/mutations');

const authTypes = require('./auth/types');
const authQueries = require('./auth/queries');
const authMutations = require('./auth/mutations');

const iamTypes = require('./iam/types');
const iamQueries = require('./iam/queries');
const iamMutations = require('./iam/mutations');

const auditLogTypes = require('./auditLog/types');
const auditLogQueries = require('./auditLog/queries');
const auditLogMutations = require('./auditLog/mutations');

const patientTypes = require('./patient/types');
const patientQueries = require('./patient/queries');
const patientMutations = require('./patient/mutations');

const satuanTypes = require('./satuan/types');
const satuanQueries = require('./satuan/queries');
const satuanMutations = require('./satuan/mutations');

const sparepartTypes = require('./sparepart/types');
const sparepartQueries = require('./sparepart/queries');
const sparepartMutations = require('./sparepart/mutations');

const supplierTypes = require('./supplier/types');
const supplierQueries = require('./supplier/queries');
const supplierMutations = require('./supplier/mutations');

const proyekTypes = require('./proyek/types');
const proyekQueries = require('./proyek/queries');
const proyekMutations = require('./proyek/mutations');

const statusAlatTypes = require('./statusAlat/types');
const statusAlatQueries = require('./statusAlat/queries');
const statusAlatMutations = require('./statusAlat/mutations');

const mekanikTypes = require('./mekanik/types');
const mekanikQueries = require('./mekanik/queries');
const mekanikMutations = require('./mekanik/mutations');

const daftarAlatTypes = require('./daftarAlat/types');
const daftarAlatQueries = require('./daftarAlat/queries');
const daftarAlatMutations = require('./daftarAlat/mutations');

const keluhanTypes = require('./keluhan/types');
const keluhanQueries = require('./keluhan/queries');
const keluhanMutations = require('./keluhan/mutations');

const permintaanPerbaikanTypes = require('./permintaanPerbaikan/types');
const permintaanPerbaikanQueries = require('./permintaanPerbaikan/queries');
const permintaanPerbaikanMutations = require('./permintaanPerbaikan/mutations');

const purchaseRequestTypes = require('./purchaseRequest/types');
const purchaseRequestQueries = require('./purchaseRequest/queries');
const purchaseRequestMutations = require('./purchaseRequest/mutations');

const cashAdvanceTypes = require('./cashAdvance/types');
const cashAdvanceQueries = require('./cashAdvance/queries');
const cashAdvanceMutations = require('./cashAdvance/mutations');

const cashPaymentTypes = require('./cashPayment/types');
const cashPaymentQueries = require('./cashPayment/queries');
const cashPaymentMutations = require('./cashPayment/mutations');

const deklarasiTypes = require('./deklarasi/types');
const deklarasiQueries = require('./deklarasi/queries');
const deklarasiMutations = require('./deklarasi/mutations');

const kasKeluarTypes = require('./kasKeluar/types');
const kasKeluarQueries = require('./kasKeluar/queries');
const kasKeluarMutations = require('./kasKeluar/mutations');

const kasMasukTypes = require('./kasMasuk/types');
const kasMasukQueries = require('./kasMasuk/queries');
const kasMasukMutations = require('./kasMasuk/mutations');

const pembelianTypes = require('./pembelian/types');
const pembelianQueries = require('./pembelian/queries');
const pembelianMutations = require('./pembelian/mutations');

const perbaikanTypes = require('./perbaikan/types');
const perbaikanQueries = require('./perbaikan/queries');
const perbaikanMutations = require('./perbaikan/mutations');

const types = [
  ...sharedTypes,
  ...iamTypes,
  ...authTypes,
  ...auditLogTypes,
  ...settingsTypes,
  ...patientTypes,
  ...satuanTypes,
  ...sparepartTypes,
  ...supplierTypes,
  ...proyekTypes,
  ...statusAlatTypes,
  ...daftarAlatTypes,
  ...keluhanTypes,
  ...mekanikTypes,
  ...permintaanPerbaikanTypes,
  ...purchaseRequestTypes,
  ...cashAdvanceTypes,
  ...cashPaymentTypes,
  ...deklarasiTypes,
  ...kasMasukTypes,
  ...kasKeluarTypes,
  ...pembelianTypes,
  ...perbaikanTypes,
].map((type) => type.schema);

const mutations = [
  ...iamMutations,
  ...authMutations,
  ...auditLogMutations,
  ...settingsMutations,
  ...patientMutations,
  ...satuanMutations,
  ...sparepartMutations,
  ...supplierMutations,
  ...proyekMutations,
  ...statusAlatMutations,
  ...daftarAlatMutations,
  ...keluhanMutations,
  ...mekanikMutations,
  ...permintaanPerbaikanMutations,
  ...purchaseRequestMutations,
  ...cashAdvanceMutations,
  ...cashPaymentMutations,
  ...deklarasiMutations,
  ...kasMasukMutations,
  ...kasKeluarMutations,
  ...pembelianMutations,
  ...perbaikanMutations,
].map((mutation) => mutation.schema);

const queries = [
  ...iamQueries,
  ...authQueries,
  ...auditLogQueries,
  ...settingsQueries,
  ...patientQueries,
  ...satuanQueries,
  ...sparepartQueries,
  ...supplierQueries,
  ...proyekQueries,
  ...statusAlatQueries,
  ...daftarAlatQueries,
  ...keluhanQueries,
  ...mekanikQueries,
  ...permintaanPerbaikanQueries,
  ...purchaseRequestQueries,
  ...cashAdvanceQueries,
  ...cashPaymentQueries,
  ...deklarasiQueries,
  ...kasMasukQueries,
  ...kasKeluarQueries,
  ...pembelianQueries,
  ...perbaikanQueries,
].map((query) => query.schema);

const query = `
  type Query {
    ${queries.join('\n')}
  }
`;

const mutation = `
  type Mutation {
    ${mutations.join('\n')}
  }
`;

const schemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [schemaDefinition, query, mutation, ...types],
  resolvers,
});
