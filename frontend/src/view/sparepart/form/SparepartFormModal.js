import React, { Component } from 'react';
import { Modal } from 'antd';
import { i18n } from 'i18n';
import SparepartForm from 'view/sparepart/form/SparepartForm';
import SparepartService from 'modules/sparepart/sparepartService';
import Errors from 'modules/shared/error/errors';

class SparepartFormModal extends Component {
  state = {
    saveLoading: false,
  };

  doSubmit = async (_, data) => {
    try {
      this.setState({
        saveLoading: true,
      });
      const { id } = await SparepartService.create(data);
      const record = await SparepartService.find(id);
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
        title={i18n('entities.sparepart.new.title')}
        visible={this.props.visible}
        onCancel={() => this.props.onCancel()}
        footer={false}
        width="80%"
      >
        <SparepartForm
          saveLoading={this.state.saveLoading}
          onSubmit={this.doSubmit}
          onCancel={this.props.onCancel}
          modal
        />
      </Modal>
    );
  }
}

export default SparepartFormModal;
