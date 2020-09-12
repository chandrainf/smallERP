const id_ID = {
  common: {
    or: 'atau',
    cancel: 'Batal',
    reset: 'Setel Ulang',
    save: 'Simpan',
    search: 'Cari',
    edit: 'Ubah',
    remove: 'Hapus',
    new: 'Baru',
    export: 'Export ke Excel',
    noDataToExport: 'Tidak ada data untuk di ekspor',
    import: 'Impor',
    discard: 'Buang',
    yes: 'Ya',
    no: 'Tidak',
    pause: 'Jeda',
    areYouSure: 'Apa Anda Yakin?',
    view: 'Lihat',
    destroy: 'Hapus',
    mustSelectARow: 'Harus memilih satu baris',
  },

  app: {
    title: 'Aplikasi',
  },

  entities: {
    patient: {
      name: 'patient',
      label: 'Patients',
      menu: 'Patients',
      exporterFileName: 'patient_export',
      list: {
        menu: 'Patients',
        title: 'Patients',
      },
      create: {
        success: 'Patient berhasil disimpan',
      },
      update: {
        success: 'Patient berhasil disimpan',
      },
      destroy: {
        success: 'Patient berhasil dihapus',
      },
      destroyAll: {
        success: 'Patient(s) berhasil dihapus',
      },
      edit: {
        title: 'Edit Patient',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        birthdateRange: 'Birthdate',
        birthdate: 'Birthdate',
        gender: 'Gender',
        user: 'User',
        phone: 'Phone',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
        createdAtRange: 'Dibuat pada',
      },
      enumerators: {
        gender: {
          male: 'Male',
          female: 'Female',
        },
      },
      new: {
        title: 'New Patient',
      },
      view: {
        title: 'View Patient',
      },
      importer: {
        title: 'Import Patients',
        fileName: 'patient_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    satuan: {
      name: 'satuan',
      label: 'Satuan',
      menu: 'Satuan',
      exporterFileName: 'satuan_export',
      list: {
        menu: 'Satuan',
        title: 'Satuan',
      },
      create: {
        success: 'Satuan berhasil disimpan',
      },
      update: {
        success: 'Satuan berhasil disimpan',
      },
      destroy: {
        success: 'Satuan berhasil dihapus',
      },
      destroyAll: {
        success: 'Satuan berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Satuan',
      },
      fields: {
        id: 'Id',
        nama: 'Nama',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Satuan Baru',
      },
      view: {
        title: 'Lihat Satuan',
      },
      importer: {
        title: 'Impor Satuan',
        fileName: 'satuan_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    supplier: {
      name: 'supplier',
      label: 'Supplier',
      menu: 'Supplier',
      exporterFileName: 'supplier_export',
      list: {
        menu: 'Supplier',
        title: 'Supplier',
      },
      create: {
        success: 'Supplier berhasil disimpan',
      },
      update: {
        success: 'Supplier berhasil disimpan',
      },
      destroy: {
        success: 'Supplier berhasil dihapus',
      },
      destroyAll: {
        success: 'Supplier berhasil dihapus semua',
      },
      edit: {
        title: 'Edit Supplier',
      },
      fields: {
        id: 'Id',
        namaSupplier: 'Nama Suplier',
        alamat: 'Alamat Supplier',
        telepon1: 'Telepon 1',
        telepon2: 'Telepon 2',
        email: 'Email',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Supplier Baru',
      },
      view: {
        title: 'Lihat Supplier',
      },
      importer: {
        title: 'Impor Supplier',
        fileName: 'supplier_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    statusAlat: {
      name: 'statusAlat',
      label: 'Status Alat',
      menu: 'Status Alat',
      exporterFileName: 'statusAlat_export',
      list: {
        menu: 'Status Alat',
        title: 'Status Alat',
      },
      create: {
        success: 'Status alat berhasil disimpan',
      },
      update: {
        success: 'Status alat berhasil disimpan',
      },
      destroy: {
        success: 'Status alat berhasil dihapus',
      },
      destroyAll: {
        success: 'Status alat berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Status Alat',
      },
      fields: {
        id: 'Id',
        status: 'Status Alat',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Status Alat Baru',
      },
      view: {
        title: 'Lihat Status Alat',
      },
      importer: {
        title: 'Impor Status Alat',
        fileName: 'statusAlat_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    proyek: {
      name: 'proyek',
      label: 'Proyek',
      menu: 'Proyek',
      exporterFileName: 'proyek_export',
      list: {
        menu: 'Proyek',
        title: 'Proyek',
      },
      create: {
        success: 'Proyek berhasil disimpan',
      },
      update: {
        success: 'Proyek berhasil disimpan',
      },
      destroy: {
        success: 'Proyek berhasil dihapus',
      },
      destroyAll: {
        success: 'Proyek berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Proyek',
      },
      fields: {
        id: 'Id',
        kodeProyek: 'Kode Proyek',
        namaProyek: 'Nama Proyek',
        lokasi: 'Lokasi Proyek',
        mekaniks: 'Nama Mekanik',
        alat: 'Nama Peralatan',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Proyek Baru',
      },
      view: {
        title: 'Lihat Proyek',
      },
      importer: {
        title: 'Impor Proyek',
        fileName: 'proyek_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    mekanik: {
      name: 'mekanik',
      label: 'Mekanik',
      menu: 'Mekanik',
      exporterFileName: 'mekanik_export',
      list: {
        menu: 'Mekanik',
        title: 'Mekanik',
      },
      create: {
        success: 'Mekanik berhasil disimpan',
      },
      update: {
        success: 'Mekanik berhasil disimpan',
      },
      destroy: {
        success: 'Mekanik berhasil dihapus',
      },
      destroyAll: {
        success: 'Mekanik berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Mekanik',
      },
      fields: {
        id: 'Id',
        mekanik: 'Nama Mekanik',
        proyeks: 'Lokasi Terakhir',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Mekanik Baru',
      },
      view: {
        title: 'Lihat Mekanik',
      },
      importer: {
        title: 'Impor Mekanik',
        fileName: 'mekanik_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    sparepart: {
      name: 'sparepart',
      label: 'Sparepart',
      menu: 'Sparepart',
      exporterFileName: 'sparepart_export',
      list: {
        menu: 'Sparepart',
        title: 'Sparepart',
      },
      create: {
        success: 'Sparepart berhasil disimpan',
      },
      update: {
        success: 'Sparepart berhasil disimpan',
      },
      destroy: {
        success: 'Sparepart berhasil dihapus',
      },
      destroyAll: {
        success: 'Sparepart berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Sparepart',
      },
      fields: {
        id: 'Id',
        partNumber: 'Kode sparepart',
        item: 'Nama Sparepart',
        merk: 'Merk Sparepart',
        satuan: 'Satuan',
        harga: 'Harga Sparepart per Item',
        stok: 'Stok',
        foto: 'Foto Sparepart',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Sparepart Baru',
      },
      view: {
        title: 'Lihat Sparepart',
      },
      importer: {
        title: 'Impor Sparepart',
        fileName: 'sparepart_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    daftarAlat: {
      name: 'daftarAlat',
      label: 'DaftarAlat',
      menu: 'Daftar Alat',
      exporterFileName: 'daftarAlat_export',
      list: {
        menu: 'Daftar ALat',
        title: 'Daftar Alat',
      },
      create: {
        success: 'Peralatan berhasil disimpan',
      },
      update: {
        success: 'Peralatan berhasil disimpan',
      },
      destroy: {
        success: 'Peralatan berhasil dihapus',
      },
      destroyAll: {
        success: 'Peralatan berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Peralatan',
      },
      fields: {
        id: 'Id',
        kodeAlat: 'Kode Peralatan',
        namaAlat: 'Nama Peralatan',
        merk: 'Merk Peralatan',
        model: 'Model Peralatan',
        kapasitas: 'Kapasitas Mesin',
        nomorRangka: 'Nomor Rangka Mesin',
        nomorMesin: 'Nomor Mesin',
        nomorPlat: 'Nomor Plat Peralatan',
        tahunPembuatanRange: 'Periode Tahun Pembuatan',
        tahunPembuatan: 'Tahun Pembuatan',
        tahunRegistrasi: 'Tanggal Registrasi',
        proyek: 'Lokasi Terakhir',
        status: 'Status Terakhir',
        kepemilikan: 'Kepemilikan',
        SIA: 'Masa Berlaku SIA',
        SIARange: 'Periode Masa Berlaku SIA',
        STNK: 'Masa Berlaku STNK',
        pajak: 'Masa Berlaku Pajak',
        pajakRange: 'Periode Masa Berlaku Pajak',
        KIR: 'Masa Berlaku KIR',
        KIRRange: 'Periode Masa Berlaku KIR',
        foto: 'Foto Peralatan',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      enumerators: {
        kepemilikan: {
          Perusahaan: 'Perusahaan',
          Rental: 'Rental',
        },
        status: {
          BEKERJA: 'BEKERJA',
          STANDBY: 'STANDBY',
          RUSAK: 'RUSAK',
          MAINTENANCE: 'MAINTENANCE',
          PERBAIKAN: 'PERBAIKAN',
        },
      },
      new: {
        title: 'Peralatan Baru',
      },
      view: {
        title: 'Lihat Sparepart',
      },
      importer: {
        title: 'Impor Sparepart',
        fileName: 'daftarAlat_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    keluhan: {
      name: 'keluhan',
      label: 'Keluhan',
      menu: 'Keluhan',
      exporterFileName: 'keluhan_export',
      list: {
        menu: 'Keluhan',
        title: 'Keluhan',
      },
      create: {
        success: 'Keluhan berhasil disimpan',
      },
      update: {
        success: 'Keluhan berhasil disimpan',
      },
      destroy: {
        success: 'Keluhan berhasil dihapus',
      },
      destroyAll: {
        success: 'Keluhan berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Keluhan',
      },
      fields: {
        id: 'Id',
        keluhan: 'Keluhan Gangguan',
        analisa: 'Analisa Gangguan',
        foto: 'Foto Kerusakan',
        tindakan: 'Tindakan Perbaikan',
        pemeriksaan: 'Tanggal Pemeriksaan',
        pemeriksaanRange: 'Periode Tanggal Pemeriksaan',
        keterangan: 'Keterangan',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Keluhan Baru',
      },
      view: {
        title: 'Lihat Keluhan',
      },
      importer: {
        title: 'Impor Keluhan',
        fileName: 'keluhan_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
    permintaanPerbaikan: {
      name: 'permintaanPerbaikan',
      label: 'PermintaanPerbaikan',
      menu: 'Permintaan Perbaikan',
      exporterFileName: 'permintaan_perbaikan_export',
      list: {
        menu: 'Permintaan Perbaikan',
        title: 'Permintaan Perbaikan',
      },
      create: {
        success: 'Permintaan Perbaikan berhasil disimpan',
      },
      update: {
        success: 'Permintaan Perbaikan berhasil disimpan',
      },
      destroy: {
        success: 'Permintaan Perbaikan berhasil dihapus',
      },
      destroyAll: {
        success:
          'Permintaan Perbaikan berhasil dihapus semua',
      },
      edit: {
        title: 'Ubah Permintaan Perbaikan',
      },
      fields: {
        id: 'Id',
        daftarAlat: 'Nama Peralatan',
        proyek: 'Proyek & Lokasi',
        mekanik: 'Usulan Perbaikan Oleh',
        diketahui: 'Diketahui Oleh',
        disetujui: 'Disetujui Oleh',
        createdAt: 'Dibuat pada',
        updatedAt: 'Diperbaharui pada',
      },
      new: {
        title: 'Permintaan Perbaikan Baru',
      },
      view: {
        title: 'Lihat Permintaan Perbaikan',
      },
      importer: {
        title: 'Permintaan Perbaikan Sparepart',
        fileName: 'permintaan_perbaikan_import_template',
        hint:
          'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Ubah Profile',
      success: 'Profil berhasil diperbarui',
    },
    createAnAccount: 'Buat akun baru',
    rememberMe: 'Ingat saya',
    forgotPassword: 'Lupa password',
    signin: 'Masuk',
    signup: 'Daftar',
    signout: 'Keluar',
    alreadyHaveAnAccount: 'Sudah memiliki akun? Masuk.',
    signinWithAnotherAccount: 'Masuk dengan akun lain',
    emailUnverified: {
      message: `Harap konfirmasi email Anda di <strong> {0} </strong> untuk melanjutkan.`,
      submit: `Kirim ulang verifikasi email`,
    },
    emptyPermissions: {
      message: `Anda belum memiliki izin. Tunggu sampai admin memberi Anda hak istimewa.`,
    },
    passwordResetEmail: {
      message: 'Kirim email pengaturan ulang kata sandi',
      error: `Email tidak dikenali`,
    },
    passwordReset: {
      message: 'Setel ulang kata sandi',
    },
    emailAddressVerificationEmail: {
      error: `Email tidak dikenali`,
    },
    verificationEmailSuccess: `Email verifikasi berhasil dikirim`,
    passwordResetEmailSuccess: `Email pengaturan ulang kata sandi berhasil dikirim`,
    passwordResetSuccess: `Kata sandi berhasil diubah`,
    verifyEmail: {
      success: 'Email berhasil diverifikasi',
      message:
        'Tunggu sebentar, email Anda sedang diverifikasi...',
    },
  },

  roles: {
    owner: {
      label: 'Owner',
      description: 'Full access to all resources',
    },
    editor: {
      label: 'Editor',
      description: 'Edit access to all resources',
    },
    viewer: {
      label: 'Viewer',
      description: 'View access to all resources',
    },
    auditLogViewer: {
      label: 'Audit Log Viewer',
      description: 'Access to view audit logs',
    },
    iamSecurityReviewer: {
      label: 'Security Reviewer',
      description: `Full access to manage users roles`,
    },
    entityEditor: {
      label: 'Entity Editor',
      description: 'Edit access to all entities',
    },
    entityViewer: {
      label: 'Entity Viewer',
      description: 'View access to all entities',
    },
    patientEditor: {
      label: 'Patient Editor',
      description: 'Edit access to Patients',
    },
    patientViewer: {
      label: 'Patient Viewer',
      description: 'View access to Patients',
    },
    casedEditor: {
      label: 'Case Editor',
      description: 'Edit access to Cases',
    },
    casedViewer: {
      label: 'Case Viewer',
      description: 'View access to Cases',
    },
    moduleEditor: {
      label: 'Module Editor',
      description: 'Edit access to Modules',
    },
    moduleViewer: {
      label: 'Module Viewer',
      description: 'View access to Modules',
    },
    taskEditor: {
      label: 'Task Editor',
      description: 'Edit access to Tasks',
    },
    inventoryEditor: {
      label: 'Inventory Editor',
      description: 'Edit akses ke Satuan',
    },
  },

  iam: {
    title: 'Identitas dan Manajemen Akses',
    menu: 'IAM',
    disable: 'Nonaktifkan',
    disabled: 'Dinonaktifkan',
    enabled: 'Diaktifkan',
    enable: 'Aktif',
    doEnableSuccess: 'Pengguna berhasil diaktifkan',
    doDisableSuccess: 'Pengguna berhasil dinonaktifkan',
    doDisableAllSuccess:
      'Semua pengguna berhasil dinonaktifkan',
    doEnableAllSuccess:
      'Semua pengguna berhasil diaktifkan',
    doAddSuccess: 'Pengguna berhasil ditambahkan',
    doUpdateSuccess: 'Pengguna berhasil diperbaharui',
    viewBy: 'Dilihat Oleh',
    users: {
      name: 'pengguna',
      label: 'Pengguna',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess: 'Izin berhasil dihapus',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Semua izin berhasil dihapus',
    },
    edit: {
      title: 'Ubah Pengguna',
    },
    new: {
      title: 'Pengguna Baru',
      titleModal: 'Pengguna Baru',
      emailsHint:
        'Pisahkan beberapa alamat email menggunakan karakter koma.',
    },
    view: {
      title: 'Lihat Pengguna',
      activity: 'Aktivitas',
    },
    importer: {
      title: 'Impor Pengguna',
      fileName: 'users_import_template',
      hint:
        'Kolom File / Gambar harus berupa URL file yang dipisahkan oleh spasi. Hubungan harus berupa ID dari record referensi yang dipisahkan oleh spasi. Peran harus berupa id peran yang dipisahkan oleh spasi..',
    },
    errors: {
      userAlreadyExists:
        'Pengguna dengan email ini sudah ada',
      userNotFound: 'Pengguna tidak ditemukan',
      disablingHimself: `Anda tidak dapat menonaktifkan diri sendiri`,
      revokingOwnPermission: `Anda tidak dapat mencabut izin pemilik Anda sendiri`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nama',
      firstName: 'Nama depan',
      lastName: 'Nama Belakang',
      status: 'Status',
      disabled: 'Nonaktif',
      phoneNumber: 'Nomor Telepon',
      role: 'Peran',
      createdAt: 'Bibuat pada',
      updatedAt: 'Diperbarui pada',
      roleUser: 'Peran/Pengguna',
      roles: 'Peran',
      createdAtRange: 'Dibuat pada',
      password: 'Kata sandi',
      patient: 'Pasien',
      rememberMe: 'Ingat saya',
    },
    enabled: 'Aktif',
    disabled: 'Tidak Aktif',
    validations: {
      // eslint-disable-next-line
      email: 'Email $ {value} tidak valid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Pisahkan beberapa entitas menggunakan karakter koma.',
    fields: {
      id: 'Id',
      timestampRange: 'Periode',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'Email Pengguna',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Pengaturan berhasil disimpan. Halaman ini akan dimuat ulang dalam {0} detik agar perubahan diterapkan.',
    },
    fields: {
      theme: 'Tema',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Emas',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Oranye',
      'polar-green': 'Polar Green',
      purple: 'Ungu',
      red: 'Merah',
      volcano: 'Volcano',
      yellow: 'Kuning',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Menyantap makanan',
      drinking: 'Minum',
      sleeping: 'Tidur',
      designing: 'Merancang',
      coding: 'Coding',
      cycling: 'Bersepeda',
      running: 'Lari',
      customer: 'Pelanggan',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Maaf, Anda tidak memiliki akses ke halaman ini`,
    404: 'Maaf, halaman yang Anda kunjungi tidak ada',
    500: 'Maaf, server melaporkan kesalahan',
    forbidden: {
      message: 'Terlarang',
    },
    validation: {
      message: 'Terjadi kesalahan',
    },
    defaultErrorMessage: 'Ops, terjadi kesalahan',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} tidak valid',
      required: '${path} tidak boleh kosong',
      oneOf:
        '${path} harus salah satu dari nilai berikut: $ {values}',
      notOneOf:
        '${path} tidak boleh salah satu dari nilai berikut: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} harus sebuah ${type}`;
      },
    },
    string: {
      length:
        '${path} harus tepat terdiri dari ${length} karakter',
      min:
        '${path} setidaknya harus terdiri dari ${min} karakter',
      max: '${path} maksimal harus $ {max} karakter',
      matches:
        '${path} harus cocok dengan yang berikut: "$ {regex}"',
      email: '${path} harus berupa email yang valid',
      url: '${path} harus berupa URL yang valid',
      trim: '${path} harus berupa string yang dipotong',
      lowercase: '${path} harus berupa string huruf kecil',
      uppercase: '${path} harus berupa string huruf besar',
      selected: '${path} harus dipilih',
    },
    number: {
      min:
        '${path} harus lebih besar dari atau sama dengan ${min}',
      max:
        '${path} harus kurang dari atau sama dengan ${max}',
      lessThan: '${path} harus kurang dari ${less}',
      moreThan: '${path} harus lebih besar dari ${more}',
      notEqual:
        '${path} harus tidak sama dengan ${notEqual}',
      positive: '${path} harus bilangan positif',
      negative: '${path} harus bilangan negatif',
      integer: '${path} harus berupa bilangan bulat',
    },
    date: {
      min: '${path} harus lebih dari ${min}',
      max: '${path} harus lebih awal dari ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'Bidang ${path} tidak boleh memiliki kunci yang tidak ditentukan dalam bentuk objek',
    },
    array: {
      min:
        'Bidang ${path} harus memiliki setidaknya $ {min} item',
      max:
        'Bidang ${path} harus memiliki kurang dari atau sama dengan ${max} item',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Unggah',
    image: 'Anda harus mengunggah gambar',
    size:
      'File terlalu besar. Ukuran maksimum yang diperbolehkan adalah {0}',
    formats: `Format yang tidak valid. Harus '{0}'.`,
  },
  importer: {
    line: 'Baris',
    status: 'Status',
    pending: 'Menunggu keputusan',
    imported: 'Impor',
    error: 'Salah',
    total: `{0} diimpor, {1} menunggu keputusan dan {2} dengan kesalahan`,
    importedMessage: `Diproses {0} dari {1}.`,
    noNavigateAwayMessage:
      'Jangan keluar dari halaman ini atau impor akan dihentikan.',
    completed: {
      success:
        'Impor selesai. Semua baris berhasil diimpor.',
      someErrors:
        'Pemrosesan selesai, tetapi beberapa baris tidak dapat diimpor',
      allErrors: 'Impor gagal. Tidak ada baris yang valid.',
    },
    form: {
      downloadTemplate: 'Unduh template',
      hint:
        'Klik atau seret file ke area ini untuk melanjutkan',
    },
    list: {
      discardConfirm:
        'Apakah Anda yakin? Data yang tidak diimpor akan hilang.',
    },
    errors: {
      invalidFileEmpty: 'File tersebut kosong',
      invalidFileExcel:
        'Hanya file excel (.xlsx) yang diperbolehkan',
      invalidFileUpload:
        'File tidak valid. Pastikan Anda menggunakan versi terakhir template.',
      importHashRequired: 'Impor hash diperlukan',
      importHashExistent: 'Data telah diimpor',
    },
  },

  autocomplete: {
    loading: 'Memuat...',
  },

  imagesViewer: {
    noImage: 'Tidak ada gambar',
  },
};

export default id_ID;
