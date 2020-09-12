import model from 'modules/supplier/supplierModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';

const { fields } = model;

class SupplierView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.namaSupplier.label}
          value={fields.namaSupplier.forView(
            record.namaSupplier,
          )}
        />

        <TextViewItem
          label={fields.telepon1.label}
          value={fields.telepon1.forView(record.telepon1)}
        />

        <TextViewItem
          label={fields.telepon2.label}
          value={fields.telepon2.forView(record.telepon2)}
        />

        <TextViewItem
          label={fields.email.label}
          value={fields.email.forView(record.email)}
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

export default SupplierView;
