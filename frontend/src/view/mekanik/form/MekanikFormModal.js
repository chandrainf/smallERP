import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import MekanikForm from 'view/mekanik/form/MekanikForm';
import MekanikService from 'modules/mekanik/mekanikService';
import Errors from 'modules/shared/error/errors';

class MekanikFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await MekanikService.create(data);
      const record = await MekanikService.find(id);
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
        title={i18n('entities.mekanik.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <MekanikForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default MekanikFormModal;
