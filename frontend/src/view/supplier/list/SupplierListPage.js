import React, { Component } from 'react';
import SupplierListFilter from 'view/supplier/list/SupplierListFilter';
import SupplierListTable from 'view/supplier/list/SupplierListTable';
import SupplierListToolbar from 'view/supplier/list/SupplierListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SupplierListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.supplier.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.supplier.list.title')}
          </PageTitle>

          <SupplierListToolbar />
          <SupplierListFilter />
          <SupplierListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SupplierListPage;
