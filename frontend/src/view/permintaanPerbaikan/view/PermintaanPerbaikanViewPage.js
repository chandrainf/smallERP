import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import PermintaanPerbaikanView from 'view/permintaanPerbaikan/view/PermintaanPerbaikanView';
import { i18n } from 'i18n';
import actions from 'modules/permintaanPerbaikan/view/permintaanPerbaikanViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/permintaanPerbaikan/view/permintaanPerbaikanViewSelectors';
import PermintaanPerbaikanViewToolbar from 'view/permintaanPerbaikan/view/PermintaanPerbaikanViewToolbar';

class PermintaanPerbaikanPage extends Component {
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
              i18n('entities.permintaanPerbaikan.menu'),
              '/permintaanPerbaikan',
            ],
            [
              i18n(
                'entities.permintaanPerbaikan.view.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.permintaanPerbaikan.view.title',
            )}
          </PageTitle>

          <PermintaanPerbaikanViewToolbar
            match={this.props.match}
          />

          <PermintaanPerbaikanView
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

export default connect(select)(PermintaanPerbaikanPage);
