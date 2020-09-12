import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import DeklarasiView from 'view/deklarasi/view/DeklarasiView';
import { i18n } from 'i18n';
import actions from 'modules/deklarasi/view/deklarasiViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/deklarasi/view/deklarasiViewSelectors';
import DeklarasiViewToolbar from 'view/deklarasi/view/DeklarasiViewToolbar';

class DeklarasiPage extends Component {
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
            [i18n('entities.deklarasi.menu'), '/deklarasi'],
            [i18n('entities.deklarasi.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.deklarasi.view.title')}
          </PageTitle>

          <DeklarasiViewToolbar match={this.props.match} />

          <DeklarasiView
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

export default connect(select)(DeklarasiPage);
