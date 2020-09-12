import model from 'modules/sparepart/sparepartModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import SatuanViewItem from 'view/satuan/view/SatuanViewItem';

const { fields } = model;

class SparepartView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.partNumber.label}
          value={fields.partNumber.forView(
            record.partNumber,
          )}
        />

        <TextViewItem
          label={fields.item.label}
          value={fields.item.forView(record.item)}
        />

        <TextViewItem
          label={fields.merk.label}
          value={fields.merk.forView(record.merk)}
        />
        <SatuanViewItem
          label={fields.satuan.label}
          value={fields.satuan.forView(record.satuan)}
        />
        <TextViewItem
          label={fields.harga.label}
          value={fields.harga.forView(record.harga)}
        />
        <TextViewItem
          label={fields.stok.label}
          value={fields.stok.forView(record.stok)}
        />
        <ImagesViewItem
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

export default SparepartView;
