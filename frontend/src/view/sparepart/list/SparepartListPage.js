import React, { Component } from 'react';
import SparepartListFilter from 'view/sparepart/list/SparepartListFilter';
import SparepartListTable from 'view/sparepart/list/SparepartListTable';
import SparepartListToolbar from 'view/sparepart/list/SparepartListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SparepartListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.sparepart.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.sparepart.list.title')}
          </PageTitle>

          <SparepartListToolbar />
          <SparepartListFilter />
          <SparepartListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SparepartListPage;
