/**
 * I18n dictionary for the id.
 */

const id_ID = {
  app: {
    title: 'Aplikasi',
  },

  auth: {
    userDisabled: 'Akun Anda dinonaktifkan',
    userNotFound: `Maaf, aplikasi tidak mengenali kredensial Anda`,
    wrongPassword: `Maaf, kami tidak mengenali kredensial Anda`,
    weakPassword: 'Kata sandi ini terlalu lemah',
    emailAlreadyInUse: 'Email sudah digunakan',
    invalidEmail: 'Harap berikan email yang valid',
    passwordReset: {
      invalidToken:
        'Tautan pengaturan ulang kata sandi tidak valid atau telah kedaluwarsa',
      error: `Email tidak dikenali`,
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'Tautan verifikasi email tidak valid atau telah kedaluwarsa',
      error: `Email tidak dikenali`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists:
        'Pengguna dengan email ini sudah ada',
      userNotFound: 'Pengguna tidak ditemukan',
      disablingHimself: `Anda tidak dapat menonaktifkan diri sendiri`,
      revokingOwnPermission: `Anda tidak dapat mencabut izin pemilik Anda sendiri`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'File tersebut kosong',
      invalidFileExcel:
        'Hanya file excel (.xlsx) yang diperbolehkan',
      invalidFileUpload:
        'File tidak valid. Pastikan Anda menggunakan versi terakhir template.',
      importHashRequired: 'Hash impor diperlukan',
      importHashExistent: 'Data telah diimpor',
    },
  },

  errors: {
    forbidden: {
      message: 'Dilarang',
    },
    validation: {
      message: 'Terjadi kesalahan',
    },
  },

  emails: {
    invitation: {
      subject: `Anda telah diundang ke{0}`,
      body: `
        <p>Halo,</p>
        <p>Anda telah diundang ke{0}.</p>
        <p>Ikuti tautan ini untuk mendaftar.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Terima kasih,</p>
        <p>Tim {0} Anda</p>
      `,
    },
    emailAddressVerification: {
      subject: `Verifikasi email Anda untuk {0}`,
      body: `
        <p>Halo,</p>
        <p>Ikuti tautan ini untuk memverifikasi alamat email Anda.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>Jika Anda tidak meminta untuk memverifikasi alamat ini, Anda dapat mengabaikan email ini.</p>
        <p>Terima kasih,</p>
        <p>Tim {1} Anda</p>
      `,
    },
    passwordReset: {
      subject: `Reset your password for{0}`,
      body: `
        <p>Halo,</p>
        <p>Ikuti tautan ini untuk menyetel ulang{0} sandi akun{1} Anda.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Jika Anda tidak meminta untuk menyetel ulang sandi, Anda dapat mengabaikan email ini.</p>
        <p>Terima kasih,</p>
        <p>Tim{0} Anda/p>
      `,
    },
  },
};

module.exports = id_ID;
