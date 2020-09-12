import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import SupplierForm from 'view/supplier/form/SupplierForm';
import SupplierService from 'modules/supplier/supplierService';
import Errors from 'modules/shared/error/errors';

class SupplierFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await SupplierService.create(data);
      const record = await SupplierService.find(id);
      this.props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      this.setState({
        saveLoading: false,
      });
    }
  };

  render() {
    if (!this.props.visible) {
      return null;
    }

    return (
      <Modal
        title={i18n('entities.supplier.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <SupplierForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default SupplierFormModal;
