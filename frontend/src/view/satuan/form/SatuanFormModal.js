import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import SatuanForm from 'view/satuan/form/SatuanForm';
import SatuanService from 'modules/satuan/satuanService';
import Errors from 'modules/shared/error/errors';

class SatuanFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await SatuanService.create(data);
      const record = await SatuanService.find(id);
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
        title={i18n('entities.satuan.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <SatuanForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default SatuanFormModal;
