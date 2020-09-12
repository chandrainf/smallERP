import model from 'modules/permintaanPerbaikan/permintaanPerbaikanModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';

const { fields } = model;

class PermintaanPerbaikanView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.daftarAlat.label}
          value={fields.daftarAlat.forView(
            record.daftarAlat,
          )}
        />
        <TextViewItem
          label={fields.proyek.label}
          value={fields.proyek.forView(record.proyek)}
        />
        <TextViewItem
          label={fields.mekanik.label}
          value={fields.mekanik.forView(record.mekanik)}
        />
        <TextViewItem
          label={fields.diketahui.label}
          value={fields.diketahui.forView(record.diketahui)}
        />
        <TextViewItem
          label={fields.disetujui.label}
          value={fields.disetujui.forView(record.disetujui)}
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

export default PermintaanPerbaikanView;
