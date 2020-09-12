import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SatuanView from 'view/satuan/view/SatuanView';
import { i18n } from 'i18n';
import actions from 'modules/satuan/view/satuanViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/satuan/view/satuanViewSelectors';
import SatuanViewToolbar from 'view/satuan/view/SatuanViewToolbar';

class SatuanPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.satuan.menu'), '/satuan'],
            [i18n('entities.satuan.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.satuan.view.title')}
          </PageTitle>

          <SatuanViewToolbar match={this.props.match} />

          <SatuanView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(SatuanPage);
