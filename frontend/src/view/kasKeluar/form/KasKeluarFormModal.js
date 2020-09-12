import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import KasKeluarForm from 'view/kasKeluar/form/KasKeluarForm';
import KasKeluarService from 'modules/kasKeluar/kasKeluarService';
import Errors from 'modules/shared/error/errors';

class KasKeluarFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await KasKeluarService.create(data);
      const record = await KasKeluarService.find(id);
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
        title={i18n('entities.kasKeluar.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <KasKeluarForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default KasKeluarFormModal;
