import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import KasKeluarView from 'view/kasKeluar/view/KasKeluarView';
import { i18n } from 'i18n';
import actions from 'modules/kasKeluar/view/kasKeluarViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/kasKeluar/view/kasKeluarViewSelectors';
import KasKeluarViewToolbar from 'view/kasKeluar/view/KasKeluarViewToolbar';

class KasKeluarPage extends Component {
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
            [i18n('entities.kasKeluar.menu'), '/kasKeluar'],
            [i18n('entities.kasKeluar.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kasKeluar.view.title')}
          </PageTitle>

          <KasKeluarViewToolbar match={this.props.match} />

          <KasKeluarView
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

export default connect(select)(KasKeluarPage);
