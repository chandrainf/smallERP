import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import SupplierView from 'view/supplier/view/SupplierView';
import { i18n } from 'i18n';
import actions from 'modules/supplier/view/supplierViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/supplier/view/supplierViewSelectors';
import SupplierViewToolbar from 'view/supplier/view/SupplierViewToolbar';

class SupplierPage extends Component {
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
            [i18n('entities.supplier.menu'), '/supplier'],
            [i18n('entities.supplier.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.supplier.view.title')}
          </PageTitle>

          <SupplierViewToolbar match={this.props.match} />

          <SupplierView
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

export default connect(select)(SupplierPage);
