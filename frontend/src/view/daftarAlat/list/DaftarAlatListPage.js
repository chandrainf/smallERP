import React, { Component } from 'react';
import DaftarAlatListFilter from 'view/daftarAlat/list/DaftarAlatListFilter';
import DaftarAlatListTable from 'view/daftarAlat/list/DaftarAlatListTable';
import DaftarAlatListToolbar from 'view/daftarAlat/list/DaftarAlatListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class DaftarAlatListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.daftarAlat.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.daftarAlat.list.title')}
          </PageTitle>

          <DaftarAlatListToolbar />
          <DaftarAlatListFilter />
          <DaftarAlatListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DaftarAlatListPage;
