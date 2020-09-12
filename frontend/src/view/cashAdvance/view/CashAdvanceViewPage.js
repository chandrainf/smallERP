import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import CashAdvanceView from 'view/cashAdvance/view/CashAdvanceView';
import { i18n } from 'i18n';
import actions from 'modules/cashAdvance/view/cashAdvanceViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/cashAdvance/view/cashAdvanceViewSelectors';
import CashAdvanceViewToolbar from 'view/cashAdvance/view/CashAdvanceViewToolbar';

class CashAdvancePage extends Component {
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
              i18n('entities.cashAdvance.menu'),
              '/cashAdvance',
            ],
            [i18n('entities.cashAdvance.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.cashAdvance.view.title')}
          </PageTitle>

          <CashAdvanceViewToolbar
            match={this.props.match}
          />

          <CashAdvanceView
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

export default connect(select)(CashAdvancePage);
