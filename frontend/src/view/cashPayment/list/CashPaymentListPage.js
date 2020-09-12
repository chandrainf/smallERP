import React, { Component } from 'react';
import CashPaymentListFilter from 'view/cashPayment/list/CashPaymentListFilter';
import CashPaymentListTable from 'view/cashPayment/list/CashPaymentListTable';
import CashPaymentListToolbar from 'view/cashPayment/list/CashPaymentListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CashPaymentListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.cashPayment.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.cashPayment.list.title')}
          </PageTitle>

          <CashPaymentListToolbar />
          <CashPaymentListFilter />
          <CashPaymentListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CashPaymentListPage;
