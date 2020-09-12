import model from 'modules/proyek/proyekModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import MekanikViewItem from 'view/mekanik/view/MekanikViewItem';

const { fields } = model;

class ProyekView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.kodeProyek.label}
          value={fields.kodeProyek.forView(
            record.kodeProyek,
          )}
        />

        <TextViewItem
          label={fields.namaProyek.label}
          value={fields.namaProyek.forView(
            record.namaProyek,
          )}
        />

        <TextViewItem
          label={fields.lokasi.label}
          value={fields.lokasi.forView(record.lokasi)}
        />

        <MekanikViewItem
          label={fields.mekaniks.label}
          value={fields.mekaniks.forView(record.mekaniks)}
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

export default ProyekView;
