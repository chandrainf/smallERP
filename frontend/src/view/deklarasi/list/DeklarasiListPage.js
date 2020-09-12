import React, { Component } from 'react';
import DeklarasiListFilter from 'view/deklarasi/list/DeklarasiListFilter';
import DeklarasiListTable from 'view/deklarasi/list/DeklarasiListTable';
import DeklarasiListToolbar from 'view/deklarasi/list/DeklarasiListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class DeklarasiListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.deklarasi.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.deklarasi.list.title')}
          </PageTitle>

          <DeklarasiListToolbar />
          <DeklarasiListFilter />
          <DeklarasiListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DeklarasiListPage;
