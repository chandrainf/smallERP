import model from 'modules/keluhan/keluhanModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';

const { fields } = model;

class KeluhanView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />
        <TextViewItem
          label={fields.keluhan.label}
          value={fields.keluhan.forView(record.keluhan)}
        />
        <TextViewItem
          label={fields.analisa.label}
          value={fields.analisa.forView(record.analisa)}
        />
        <ImagesViewItem
          label={fields.foto.label}
          value={fields.foto.forView(record.foto)}
        />
        <TextViewItem
          label={fields.pemeriksaan.label}
          value={fields.pemeriksaan.forView(
            record.pemeriksaanRange,
          )}
        />
        <TextViewItem
          label={fields.keterangan.label}
          value={fields.keterangan.forView(
            record.keterangan,
          )}
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

export default KeluhanView;
