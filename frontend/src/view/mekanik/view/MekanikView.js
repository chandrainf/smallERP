import model from 'modules/mekanik/mekanikModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import ProyekViewItem from 'view/proyek/view/ProyekViewItem';

const { fields } = model;

class MekanikView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.mekanik.label}
          value={fields.mekanik.forView(record.mekanik)}
        />
        <ProyekViewItem
          label={fields.proyeks.label}
          value={fields.proyeks.forView(record.proyek)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default MekanikView;
