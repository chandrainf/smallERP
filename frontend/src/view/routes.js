import Permissions from 'security/permissions';
import { i18n } from 'i18n';
const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    icon: 'home',
    label: i18n('home.menu'),
    menu: {
      exact: true,
    },
    loader: () => import('view/home/HomePage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
    menu: false,
  },

  {
    path: '/iam',
    loader: () => import('view/iam/list/IamPage'),
    permissionRequired: permissions.iamRead,
    exact: true,
    icon: 'user-add',
    label: i18n('iam.menu'),
    menu: true,
  },
  {
    path: '/iam/new',
    loader: () => import('view/iam/new/IamNewPage'),
    menu: false,
    permissionRequired: permissions.iamCreate,
    exact: true,
  },
  {
    path: '/iam/importer',
    loader: () =>
      import('view/iam/importer/IamImporterPage'),
    menu: false,
    permissionRequired: permissions.iamImport,
    exact: true,
  },
  {
    path: '/iam/:id/edit',
    loader: () => import('view/iam/edit/IamEditPage'),
    menu: false,
    permissionRequired: permissions.iamEdit,
    exact: true,
  },
  {
    path: '/iam/:id',
    loader: () => import('view/iam/view/IamViewPage'),
    menu: false,
    permissionRequired: permissions.iamRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    icon: 'file-search',
    label: i18n('auditLog.menu'),
    loader: () => import('view/auditLog/AuditLogPage'),
    menu: true,
    permissionRequired: permissions.auditLogRead,
  },
  {
    path: '/satuan',
    loader: () => import('view/satuan/list/SatuanListPage'),
    permissionRequired: permissions.satuanRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.satuan.menu'),
    menu: true,
  },
  {
    path: '/satuan/new',
    loader: () => import('view/satuan/form/SatuanFormPage'),
    menu: false,
    permissionRequired: permissions.satuanCreate,
    exact: true,
  },
  {
    path: '/satuan/importer',
    loader: () =>
      import('view/satuan/importer/SatuanImporterPage'),
    menu: false,
    permissionRequired: permissions.satuanImport,
    exact: true,
  },
  {
    path: '/satuan/:id/edit',
    loader: () => import('view/satuan/form/SatuanFormPage'),
    menu: false,
    permissionRequired: permissions.satuanEdit,
    exact: true,
  },
  {
    path: '/satuan/:id',
    loader: () => import('view/satuan/view/SatuanViewPage'),
    menu: false,
    permissionRequired: permissions.satuanRead,
    exact: true,
  },
  {
    path: '/supplier',
    loader: () =>
      import('view/supplier/list/SupplierListPage'),
    permissionRequired: permissions.supplierRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.supplier.menu'),
    menu: true,
  },
  {
    path: '/supplier/new',
    loader: () =>
      import('view/supplier/form/SupplierFormPage'),
    menu: false,
    permissionRequired: permissions.supplierCreate,
    exact: true,
  },
  {
    path: '/supplier/importer',
    loader: () =>
      import('view/supplier/importer/SupplierImporterPage'),
    menu: false,
    permissionRequired: permissions.supplierImport,
    exact: true,
  },
  {
    path: '/supplier/:id/edit',
    loader: () =>
      import('view/supplier/form/SupplierFormPage'),
    menu: false,
    permissionRequired: permissions.supplierEdit,
    exact: true,
  },
  {
    path: '/supplier/:id',
    loader: () =>
      import('view/supplier/view/SupplierViewPage'),
    menu: false,
    permissionRequired: permissions.supplierRead,
    exact: true,
  },
  {
    path: '/statusAlat',
    loader: () =>
      import('view/statusAlat/list/StatusAlatListPage'),
    permissionRequired: permissions.statusAlatRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.statusAlat.menu'),
    menu: true,
  },
  {
    path: '/statusAlat/new',
    loader: () =>
      import('view/statusAlat/form/StatusAlatFormPage'),
    menu: false,
    permissionRequired: permissions.statusAlatCreate,
    exact: true,
  },
  {
    path: '/statusAlat/importer',
    loader: () =>
      import(
        'view/statusAlat/importer/StatusAlatImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.statusAlatImport,
    exact: true,
  },
  {
    path: '/statusAlat/:id/edit',
    loader: () =>
      import('view/statusAlat/form/StatusAlatFormPage'),
    menu: false,
    permissionRequired: permissions.statusAlatEdit,
    exact: true,
  },
  {
    path: '/statusAlat/:id',
    loader: () =>
      import('view/statusAlat/view/StatusAlatViewPage'),
    menu: false,
    permissionRequired: permissions.statusAlatRead,
    exact: true,
  },
  {
    path: '/proyek',
    loader: () => import('view/proyek/list/ProyekListPage'),
    permissionRequired: permissions.proyekRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.proyek.menu'),
    menu: true,
  },
  {
    path: '/proyek/new',
    loader: () => import('view/proyek/form/ProyekFormPage'),
    menu: false,
    permissionRequired: permissions.proyekCreate,
    exact: true,
  },
  {
    path: '/proyek/importer',
    loader: () =>
      import('view/proyek/importer/ProyekImporterPage'),
    menu: false,
    permissionRequired: permissions.proyekImport,
    exact: true,
  },
  {
    path: '/proyek/:id/edit',
    loader: () => import('view/proyek/form/ProyekFormPage'),
    menu: false,
    permissionRequired: permissions.proyekEdit,
    exact: true,
  },
  {
    path: '/proyek/:id',
    loader: () => import('view/proyek/view/ProyekViewPage'),
    menu: false,
    permissionRequired: permissions.proyekRead,
    exact: true,
  },
  {
    path: '/mekanik',
    loader: () =>
      import('view/mekanik/list/MekanikListPage'),
    permissionRequired: permissions.mekanikRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.mekanik.menu'),
    menu: true,
  },
  {
    path: '/mekanik/new',
    loader: () =>
      import('view/mekanik/form/MekanikFormPage'),
    menu: false,
    permissionRequired: permissions.mekanikCreate,
    exact: true,
  },
  {
    path: '/mekanik/importer',
    loader: () =>
      import('view/mekanik/importer/MekanikImporterPage'),
    menu: false,
    permissionRequired: permissions.mekanikImport,
    exact: true,
  },
  {
    path: '/mekanik/:id/edit',
    loader: () =>
      import('view/mekanik/form/MekanikFormPage'),
    menu: false,
    permissionRequired: permissions.mekanikEdit,
    exact: true,
  },
  {
    path: '/mekanik/:id',
    loader: () =>
      import('view/mekanik/view/MekanikViewPage'),
    menu: false,
    permissionRequired: permissions.mekanikRead,
    exact: true,
  },
  {
    path: '/sparepart',
    loader: () =>
      import('view/sparepart/list/SparepartListPage'),
    permissionRequired: permissions.sparepartRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.sparepart.menu'),
    menu: true,
  },
  {
    path: '/sparepart/new',
    loader: () =>
      import('view/sparepart/form/SparepartFormPage'),
    menu: false,
    permissionRequired: permissions.sparepartCreate,
    exact: true,
  },
  {
    path: '/sparepart/importer',
    loader: () =>
      import(
        'view/sparepart/importer/SparepartImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.sparepartImport,
    exact: true,
  },
  {
    path: '/sparepart/:id/edit',
    loader: () =>
      import('view/sparepart/form/SparepartFormPage'),
    menu: false,
    permissionRequired: permissions.sparepartEdit,
    exact: true,
  },
  {
    path: '/sparepart/:id',
    loader: () =>
      import('view/sparepart/view/SparepartViewPage'),
    menu: false,
    permissionRequired: permissions.sparepartRead,
    exact: true,
  },
  {
    path: '/keluhan',
    loader: () =>
      import('view/keluhan/list/KeluhanListPage'),
    permissionRequired: permissions.keluhanRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.keluhan.menu'),
    menu: true,
  },
  {
    path: '/keluhan/new',
    loader: () =>
      import('view/keluhan/form/KeluhanFormPage'),
    menu: false,
    permissionRequired: permissions.keluhanCreate,
    exact: true,
  },
  {
    path: '/keluhan/importer',
    loader: () =>
      import('view/keluhan/importer/KeluhanImporterPage'),
    menu: false,
    permissionRequired: permissions.keluhanImport,
    exact: true,
  },
  {
    path: '/keluhan/:id/edit',
    loader: () =>
      import('view/keluhan/form/KeluhanFormPage'),
    menu: false,
    permissionRequired: permissions.keluhanEdit,
    exact: true,
  },
  {
    path: '/keluhan/:id',
    loader: () =>
      import('view/keluhan/view/KeluhanViewPage'),
    menu: false,
    permissionRequired: permissions.keluhanRead,
    exact: true,
  },
  {
    path: '/daftarAlat',
    loader: () =>
      import('view/daftarAlat/list/DaftarAlatListPage'),
    permissionRequired: permissions.daftarAlatRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.daftarAlat.menu'),
    menu: true,
  },
  {
    path: '/daftarAlat/new',
    loader: () =>
      import('view/daftarAlat/form/DaftarAlatFormPage'),
    menu: false,
    permissionRequired: permissions.daftarAlatCreate,
    exact: true,
  },
  {
    path: '/daftarAlat/importer',
    loader: () =>
      import(
        'view/daftarAlat/importer/DaftarAlatImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.daftarAlatImport,
    exact: true,
  },
  {
    path: '/daftarAlat/:id/edit',
    loader: () =>
      import('view/daftarAlat/form/DaftarAlatFormPage'),
    menu: false,
    permissionRequired: permissions.daftarAlatEdit,
    exact: true,
  },
  {
    path: '/daftarAlat/:id',
    loader: () =>
      import('view/daftarAlat/view/DaftarAlatViewPage'),
    menu: false,
    permissionRequired: permissions.daftarAlatRead,
    exact: true,
  },
  {
    path: '/permintaanPerbaikan',
    loader: () =>
      import(
        'view/permintaanPerbaikan/list/PermintaanPerbaikanListPage'
      ),
    permissionRequired: permissions.permintaanPerbaikanRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.permintaanPerbaikan.menu'),
    menu: true,
  },
  {
    path: '/permintaanPerbaikan/new',
    loader: () =>
      import(
        'view/permintaanPerbaikan/form/PermintaanPerbaikanFormPage'
      ),
    menu: false,
    permissionRequired:
      permissions.permintaanPerbaikanCreate,
    exact: true,
  },
  {
    path: '/permintaanPerbaikan/importer',
    loader: () =>
      import(
        'view/permintaanPerbaikan/importer/PermintaanPerbaikanImporterPage'
      ),
    menu: false,
    permissionRequired:
      permissions.permintaanPerbaikanImport,
    exact: true,
  },
  {
    path: '/permintaanPerbaikan/:id/edit',
    loader: () =>
      import(
        'view/permintaanPerbaikan/form/PermintaanPerbaikanFormPage'
      ),
    menu: false,
    permissionRequired: permissions.permintaanPerbaikanEdit,
    exact: true,
  },
  {
    path: '/permintaanPerbaikan/:id',
    loader: () =>
      import(
        'view/permintaanPerbaikan/view/PermintaanPerbaikanViewPage'
      ),
    menu: false,
    permissionRequired: permissions.permintaanPerbaikanRead,
    exact: true,
  },
  {
    path: '/deklarasi',
    loader: () =>
      import('view/deklarasi/list/DeklarasiListPage'),
    permissionRequired: permissions.deklarasiRead,
    exact: true,
    icon: 'right',
    label: i18n('entities.deklarasi.menu'),
    menu: true,
  },
  {
    path: '/deklarasi/new',
    loader: () =>
      import('view/deklarasi/form/DeklarasiFormPage'),
    menu: false,
    permissionRequired: permissions.deklarasiCreate,
    exact: true,
  },
  {
    path: '/deklarasi/importer',
    loader: () =>
      import(
        'view/deklarasi/importer/DeklarasiImporterPage'
      ),
    menu: false,
    permissionRequired: permissions.deklarasiImport,
    exact: true,
  },
  {
    path: '/deklarasi/:id/edit',
    loader: () =>
      import('view/deklarasi/form/DeklarasiFormPage'),
    menu: false,
    permissionRequired: permissions.deklarasiEdit,
    exact: true,
  },
  {
    path: '/deklarasi/:id',
    loader: () =>
      import('view/deklarasi/view/DeklarasiViewPage'),
    menu: false,
    permissionRequired: permissions.deklarasiRead,
    exact: true,
  },
  {
    path: '/settings',
    icon: 'setting',
    label: i18n('settings.menu'),
    loader: () => import('view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
    menu: true,
  },
];

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () => import('view/auth/ForgotPasswordPage'),
  },
];

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () => import('view/auth/EmptyPermissionsPage'),
  },
];

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () => import('view/auth/EmailUnverifiedPage'),
  },
];

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () => import('view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () => import('view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () => import('view/shared/errors/Error404Page'),
  },
];

export default {
  privateRoutes,
  publicRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
