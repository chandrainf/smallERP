import model from 'modules/daftarAlat/daftarAlatModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ProyekViewItem from 'view/proyek/view/ProyekViewItem';

const { fields } = model;

class DaftarAlatView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />
        <TextViewItem
          label={fields.kodeAlat.label}
          value={fields.kodeAlat.forView(record.kodeAlat)}
        />
        <TextViewItem
          label={fields.namaAlat.label}
          value={fields.namaAlat.forView(record.namaAlat)}
        />
        <TextViewItem
          label={fields.merk.label}
          value={fields.merk.forView(record.merk)}
        />
        <TextViewItem
          label={fields.model.label}
          value={fields.model.forView(record.model)}
        />
        <TextViewItem
          label={fields.kapasitas.label}
          value={fields.kapasitas.forView(record.kapasitas)}
        />
        <TextViewItem
          label={fields.nomorRangka.label}
          value={fields.nomorRangka.forView(
            record.nanomorRangka,
          )}
        />
        <TextViewItem
          label={fields.nomorMesin.label}
          value={fields.nomorMesin.forView(
            record.nomorMesin,
          )}
        />
        <TextViewItem
          label={fields.nomorPlat.label}
          value={fields.nomorPlat.forView(record.nomorPlat)}
        />
        <TextViewItem
          label={fields.tahunPembuatan.label}
          value={fields.tahunPembuatan.forView(
            record.tahunPembuatan,
          )}
        />
        <TextViewItem
          label={fields.tahunRegistrasi.label}
          value={fields.tahunRegistrasi.forView(
            record.tahunRegistrasi,
          )}
        />
        <ProyekViewItem
          label={fields.proyek.label}
          value={fields.proyek.forView(record.proyek)}
        />
        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.statusAlat)}
        />
        <TextViewItem
          label={fields.kepemilikan.label}
          value={fields.kepemilikan.forView(
            record.kepemilikan,
          )}
        />
        <TextViewItem
          label={fields.SIA.label}
          value={fields.SIA.forView(record.SIA)}
        />
        <TextViewItem
          label={fields.pajak.label}
          value={fields.pajak.forView(record.pajak)}
        />
        <TextViewItem
          label={fields.STNK.label}
          value={fields.STNK.forView(record.STNK)}
        />
        <TextViewItem
          label={fields.KIR.label}
          value={fields.KIR.forView(record.KIR)}
        />
        <TextViewItem
          label={fields.foto.label}
          value={fields.foto.forView(record.foto)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default DaftarAlatView;
