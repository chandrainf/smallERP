import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import DaftarAlatView from 'view/daftarAlat/view/DaftarAlatView';
import { i18n } from 'i18n';
import actions from 'modules/daftarAlat/view/daftarAlatViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/daftarAlat/view/daftarAlatViewSelectors';
import DaftarAlatViewToolbar from 'view/daftarAlat/view/DaftarAlatViewToolbar';

class DaftarAlatPage extends Component {
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
              i18n('entities.daftarAlat.menu'),
              '/daftarAlat',
            ],
            [i18n('entities.daftarAlat.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.daftarAlat.view.title')}
          </PageTitle>

          <DaftarAlatViewToolbar match={this.props.match} />

          <DaftarAlatView
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

export default connect(select)(DaftarAlatPage);
