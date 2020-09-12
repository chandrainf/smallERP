import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import KasMasukView from 'view/kasMasuk/view/KasMasukView';
import { i18n } from 'i18n';
import actions from 'modules/kasMasuk/view/kasMasukViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/kasMasuk/view/kasMasukViewSelectors';
import KasMasukViewToolbar from 'view/kasMasuk/view/KasMasukViewToolbar';

class KasMasukPage extends Component {
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
            [i18n('entities.kasMasuk.menu'), '/kasMasuk'],
            [i18n('entities.kasMasuk.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kasMasuk.view.title')}
          </PageTitle>

          <KasMasukViewToolbar match={this.props.match} />

          <KasMasukView
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

export default connect(select)(KasMasukPage);
