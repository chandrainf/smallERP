const Roles = require('./roles');
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [
          roles.owner,
          roles.auditLogViewer,
          roles.viewer,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
      patientImport: {
        id: 'patientImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.patientEditor,
        ],
      },
      patientCreate: {
        id: 'patientCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.patientEditor,
        ],
        allowedStorageFolders: ['patient'],
      },
      patientEdit: {
        id: 'patientEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.patientEditor,
        ],
        allowedStorageFolders: ['patient'],
      },
      patientDestroy: {
        id: 'patientDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.patientEditor,
        ],
        allowedStorageFolders: ['patient'],
      },
      patientRead: {
        id: 'patientRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.patientEditor,
          roles.patientViewer,
        ],
      },
      patientAutocomplete: {
        id: 'patientAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.patientEditor,
          roles.patientViewer,
          roles.casedEditor,
          roles.casedViewer,
        ],
      },
      satuanImport: {
        id: 'satuanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      satuanCreate: {
        id: 'satuanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['satuan'],
      },
      satuanEdit: {
        id: 'satuanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['satuan'],
      },
      satuanDestroy: {
        id: 'satuanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['satuan'],
      },
      satuanRead: {
        id: 'satuanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      satuanAutocomplete: {
        id: 'satuanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      supplierImport: {
        id: 'supplierImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      supplierCreate: {
        id: 'supplierCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['supplier'],
      },
      supplierEdit: {
        id: 'supplierEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['supplier'],
      },
      supplierDestroy: {
        id: 'supplierDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['supplier'],
      },
      supplierRead: {
        id: 'supplierRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      supplierAutocomplete: {
        id: 'supplierAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      cashAdvanceImport: {
        id: 'cashAdvanceImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      cashAdvanceCreate: {
        id: 'cashAdvanceCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['cashAdvance'],
      },
      cashAdvanceEdit: {
        id: 'cashAdvanceEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['cashAdvance'],
      },
      cashAdvanceDestroy: {
        id: 'cashAdvanceDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['cashAdvance'],
      },
      cashAdvanceRead: {
        id: 'cashAdvanceRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      cashAdvanceAutocomplete: {
        id: 'cashAdvanceAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      cashPaymentImport: {
        id: 'cashPaymentImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      cashPaymentCreate: {
        id: 'cashPaymentCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['cashPayment'],
      },
      cashPaymentEdit: {
        id: 'cashPaymentEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['cashPayment'],
      },
      cashPaymentDestroy: {
        id: 'cashPaymentDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['cashPayment'],
      },
      cashPaymentRead: {
        id: 'cashPaymentRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      cashPaymentAutocomplete: {
        id: 'cashPaymentAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      daftarAlatImport: {
        id: 'daftarAlatImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      daftarAlatCreate: {
        id: 'daftarAlatCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['daftarAlat'],
      },
      daftarAlatEdit: {
        id: 'daftarAlatEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['daftarAlat'],
      },
      daftarAlatDestroy: {
        id: 'daftarAlatDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['daftarAlat'],
      },
      daftarAlatRead: {
        id: 'daftarAlatRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      daftarAlatAutocomplete: {
        id: 'daftarAlatAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      deklarasiImport: {
        id: 'deklarasiImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      deklarasiCreate: {
        id: 'deklarasiCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['deklarasi'],
      },
      deklarasiEdit: {
        id: 'deklarasiEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['deklarasi'],
      },
      deklarasiDestroy: {
        id: 'deklarasiDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['deklarasi'],
      },
      deklarasiRead: {
        id: 'deklarasiRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      deklarasiAutocomplete: {
        id: 'deklarasiAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      kasKeluarImport: {
        id: 'kasKeluarImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      kasKeluarCreate: {
        id: 'kasKeluarCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['kasKeluar'],
      },
      kasKeluarEdit: {
        id: 'kasKeluarEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['kasKeluar'],
      },
      kasKeluarDestroy: {
        id: 'kasKeluarDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['kasKeluar'],
      },
      kasKeluarRead: {
        id: 'kasKeluarRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      kasKeluarAutocomplete: {
        id: 'kasKeluarAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      kasMasukImport: {
        id: 'kasMasukImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      kasMasukCreate: {
        id: 'kasMasukCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['kasMasuk'],
      },
      kasMasukEdit: {
        id: 'kasMasukEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['kasMasuk'],
      },
      kasMasukDestroy: {
        id: 'kasMasukDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['kasMasuk'],
      },
      kasMasukRead: {
        id: 'kasMasukRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      kasMasukAutocomplete: {
        id: 'kasMasukAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      mekanikImport: {
        id: 'mekanikImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      mekanikCreate: {
        id: 'mekanikCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['mekanik'],
      },
      mekanikEdit: {
        id: 'mekanikEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['mekanik'],
      },
      mekanikDestroy: {
        id: 'mekanikDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['mekanik'],
      },
      mekanikRead: {
        id: 'mekanikRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      mekanikAutocomplete: {
        id: 'mekanikAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      permintaanPerbaikanImport: {
        id: 'permintaanPerbaikanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      permintaanPerbaikanCreate: {
        id: 'permintaanPerbaikanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['permintaanPerbaikan'],
      },
      permintaanPerbaikanEdit: {
        id: 'permintaanPerbaikanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['permintaanPerbaikan'],
      },
      permintaanPerbaikanDestroy: {
        id: 'permintaanPerbaikanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['permintaanPerbaikan'],
      },
      permintaanPerbaikanRead: {
        id: 'permintaanPerbaikanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      permintaanPerbaikanAutocomplete: {
        id: 'permintaanPerbaikanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      proyekImport: {
        id: 'proyekImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      proyekCreate: {
        id: 'proyekCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['proyek'],
      },
      proyekEdit: {
        id: 'proyekEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['proyek'],
      },
      proyekDestroy: {
        id: 'proyekDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['proyek'],
      },
      proyekRead: {
        id: 'proyekRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      proyekAutocomplete: {
        id: 'proyekAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      purchaseRequestImport: {
        id: 'purchaseRequestImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      purchaseRequestCreate: {
        id: 'purchaseRequestCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['purchaseRequest'],
      },
      purchaseRequestEdit: {
        id: 'purchaseRequestEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['purchaseRequest'],
      },
      purchaseRequestDestroy: {
        id: 'purchaseRequestDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['purchaseRequest'],
      },
      purchaseRequestRead: {
        id: 'purchaseRequestRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      purchaseRequestAutocomplete: {
        id: 'purchaseRequestAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      sparepartImport: {
        id: 'sparepartImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      sparepartCreate: {
        id: 'sparepartCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['sparepart'],
      },
      sparepartEdit: {
        id: 'sparepartEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['sparepart'],
      },
      sparepartDestroy: {
        id: 'sparepartDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['sparepart'],
      },
      sparepartRead: {
        id: 'sparepartRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      sparepartAutocomplete: {
        id: 'sparepartAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      statusAlatImport: {
        id: 'statusAlatImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      statusAlatCreate: {
        id: 'statusAlatCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['statusAlat'],
      },
      statusAlatEdit: {
        id: 'statusAlatEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['statusAlat'],
      },
      statusAlatDestroy: {
        id: 'statusAlatDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['statusAlat'],
      },
      statusAlatRead: {
        id: 'statusAlatRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      statusAlatAutocomplete: {
        id: 'statusAlatAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      keluhanImport: {
        id: 'keluhanImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      keluhanCreate: {
        id: 'keluhanCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['keluhan'],
      },
      keluhanEdit: {
        id: 'keluhanEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['keluhan'],
      },
      keluhanDestroy: {
        id: 'keluhanDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
        allowedStorageFolders: ['keluhan'],
      },
      keluhanRead: {
        id: 'keluhanRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
      keluhanAutocomplete: {
        id: 'keluhanAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.inventoryEditor,
        ],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

module.exports = Permissions;
