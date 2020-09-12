import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import CashPaymentForm from 'view/cashPayment/form/CashPaymentForm';
import CashPaymentService from 'modules/cashPayment/cashPaymentService';
import Errors from 'modules/shared/error/errors';

class CashPaymentFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await CashPaymentService.create(data);
      const record = await CashPaymentService.find(id);
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
        title={i18n('entities.cashPayment.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <CashPaymentForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default CashPaymentFormModal;
