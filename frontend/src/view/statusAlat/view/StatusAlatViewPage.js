import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import StatusAlatView from 'view/statusAlat/view/StatusAlatView';
import { i18n } from 'i18n';
import actions from 'modules/statusAlat/view/statusAlatViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/statusAlat/view/statusAlatViewSelectors';
import StatusAlatViewToolbar from 'view/statusAlat/view/StatusAlatViewToolbar';

class StatusAlatPage extends Component {
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
              i18n('entities.statusAlat.menu'),
              '/statusAlat',
            ],
            [i18n('entities.statusAlat.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.statusAlat.view.title')}
          </PageTitle>

          <StatusAlatViewToolbar match={this.props.match} />

          <StatusAlatView
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

export default connect(select)(StatusAlatPage);
