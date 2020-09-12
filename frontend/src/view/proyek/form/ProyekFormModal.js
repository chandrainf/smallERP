import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import ProyekForm from 'view/proyek/form/ProyekForm';
import ProyekService from 'modules/proyek/proyekService';
import Errors from 'modules/shared/error/errors';

class ProyekFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await ProyekService.create(data);
      const record = await ProyekService.find(id);
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
        title={i18n('entities.proyek.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <ProyekForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default ProyekFormModal;
