import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import PurchaseRequestForm from 'view/purchaseRequest/form/PurchaseRequestForm';
import PurchaseRequestService from 'modules/purchaseRequest/purchaseRequestService';
import Errors from 'modules/shared/error/errors';

class PurchaseRequestFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await PurchaseRequestService.create(
        data,
      );
      const record = await PurchaseRequestService.find(id);
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
        title={i18n('entities.purchaseRequest.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <PurchaseRequestForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default PurchaseRequestFormModal;
