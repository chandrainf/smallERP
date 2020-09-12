import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ProyekView from 'view/proyek/view/ProyekView';
import { i18n } from 'i18n';
import actions from 'modules/proyek/view/proyekViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/proyek/view/proyekViewSelectors';
import ProyekViewToolbar from 'view/proyek/view/ProyekViewToolbar';

class ProyekPage extends Component {
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
            [i18n('entities.proyek.menu'), '/proyek'],
            [i18n('entities.proyek.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.proyek.view.title')}
          </PageTitle>

          <ProyekViewToolbar match={this.props.match} />

          <ProyekView
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

export default connect(select)(ProyekPage);
