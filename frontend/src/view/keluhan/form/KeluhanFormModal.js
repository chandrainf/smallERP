import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import KeluhanForm from 'view/keluhan/form/KeluhanForm';
import KeluhanService from 'modules/keluhan/keluhanService';
import Errors from 'modules/shared/error/errors';

class KeluhanFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await KeluhanService.create(data);
      const record = await KeluhanService.find(id);
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
        title={i18n('entities.keluhan.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <KeluhanForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default KeluhanFormModal;
