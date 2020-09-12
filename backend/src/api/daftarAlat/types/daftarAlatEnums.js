const schema = `
enum DaftarAlatKepemilikanEnum {
    Perusahaan
    Rental
  }

enum DaftarAlatStatusEnum {
  BEKERJA
  STANDBY
  RUSAK
  MAINTENANCE
  PERBAIKAN 
}
`;

const resolver = {};

exports.schema = schema;
exports.resolver = resolver;
