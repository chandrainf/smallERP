import React, { Component } from 'react';
import CashAdvanceListFilter from 'view/cashAdvance/list/CashAdvanceListFilter';
import CashAdvanceListTable from 'view/cashAdvance/list/CashAdvanceListTable';
import CashAdvanceListToolbar from 'view/cashAdvance/list/CashAdvanceListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class CashAdvanceListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.cashAdvance.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.cashAdvance.list.title')}
          </PageTitle>

          <CashAdvanceListToolbar />
          <CashAdvanceListFilter />
          <CashAdvanceListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CashAdvanceListPage;
