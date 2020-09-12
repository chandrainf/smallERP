import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import DaftarAlatForm from 'view/daftarAlat/form/DaftarAlatForm';
import DaftarAlatService from 'modules/daftarAlat/daftarAlatService';
import Errors from 'modules/shared/error/errors';

class DaftarAlatFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await DaftarAlatService.create(data);
      const record = await DaftarAlatService.find(id);
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
        title={i18n('entities.daftarAlat.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <DaftarAlatForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default DaftarAlatFormModal;
