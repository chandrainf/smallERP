import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import MekanikView from 'view/mekanik/view/MekanikView';
import { i18n } from 'i18n';
import actions from 'modules/mekanik/view/mekanikViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/mekanik/view/mekanikViewSelectors';
import MekanikViewToolbar from 'view/mekanik/view/MekanikViewToolbar';

class MekanikPage extends Component {
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
            [i18n('entities.mekanik.menu'), '/mekanik'],
            [i18n('entities.mekanik.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mekanik.view.title')}
          </PageTitle>

          <MekanikViewToolbar match={this.props.match} />

          <MekanikView
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

export default connect(select)(MekanikPage);
