import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SatuanView from 'view/cashPayment/view/SatuanView';
import { i18n } from 'i18n';
import actions from 'modules/cashPayment/view/cashPaymentViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/cashPayment/view/cashPaymentViewSelectors';
import SatuanViewToolbar from 'view/cashPayment/view/SatuanViewToolbar';

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
            [
              i18n('entities.cashPayment.menu'),
              '/cashPayment',
            ],
            [i18n('entities.cashPayment.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.cashPayment.view.title')}
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
