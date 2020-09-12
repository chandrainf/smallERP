import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import CashAdvanceForm from 'view/cashAdvance/form/CashAdvanceForm';
import CashAdvanceService from 'modules/cashAdvance/cashAdvanceService';
import Errors from 'modules/shared/error/errors';

class CashAdvanceFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await CashAdvanceService.create(data);
      const record = await CashAdvanceService.find(id);
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
        title={i18n('entities.cashAdvance.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <CashAdvanceForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default CashAdvanceFormModal;
