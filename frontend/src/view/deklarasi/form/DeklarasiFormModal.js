import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import DeklarasiForm from 'view/deklarasi/form/DeklarasiForm';
import DeklarasiService from 'modules/deklarasi/deklarasiService';
import Errors from 'modules/shared/error/errors';

class DeklarasiFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await DeklarasiService.create(data);
      const record = await DeklarasiService.find(id);
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
        title={i18n('entities.deklarasi.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <DeklarasiForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default DeklarasiFormModal;
