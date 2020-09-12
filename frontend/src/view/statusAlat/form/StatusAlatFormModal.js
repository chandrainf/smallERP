import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import StatusAlatForm from 'view/statusAlat/form/StatusAlatForm';
import StatusAlatService from 'modules/statusAlat/statusAlatService';
import Errors from 'modules/shared/error/errors';

class StatusAlatFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await StatusAlatService.create(data);
      const record = await StatusAlatService.find(id);
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
        title={i18n('entities.statusAlat.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <StatusAlatForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default StatusAlatFormModal;
