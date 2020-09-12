import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import PurchaseRequestView from 'view/purchaseRequest/view/PurchaseRequestView';
import { i18n } from 'i18n';
import actions from 'modules/purchaseRequest/view/purchaseRequestViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/purchaseRequest/view/purchaseRequestViewSelectors';
import PurchaseRequestViewToolbar from 'view/purchaseRequest/view/PurchaseRequestViewToolbar';

class PurchaseRequestPage extends Component {
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
              i18n('entities.purchaseRequest.menu'),
              '/purchaseRequest',
            ],
            [i18n('entities.purchaseRequest.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.purchaseRequest.view.title')}
          </PageTitle>

          <PurchaseRequestViewToolbar
            match={this.props.match}
          />

          <PurchaseRequestView
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

export default connect(select)(PurchaseRequestPage);
