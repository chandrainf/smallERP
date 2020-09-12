import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SparepartView from 'view/sparepart/view/SparepartView';
import { i18n } from 'i18n';
import actions from 'modules/sparepart/view/sparepartViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/sparepart/view/sparepartViewSelectors';
import SparepartViewToolbar from 'view/sparepart/view/SparepartViewToolbar';

class SparepartPage extends Component {
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
            [i18n('entities.sparepart.menu'), '/sparepart'],
            [i18n('entities.sparepart.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.sparepart.view.title')}
          </PageTitle>

          <SparepartViewToolbar match={this.props.match} />

          <SparepartView
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

export default connect(select)(SparepartPage);
