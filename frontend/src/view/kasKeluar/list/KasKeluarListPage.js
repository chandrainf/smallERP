import React, { Component } from 'react';
import KasKeluarListFilter from 'view/kasKeluar/list/KasKeluarListFilter';
import KasKeluarListTable from 'view/kasKeluar/list/KasKeluarListTable';
import KasKeluarListToolbar from 'view/kasKeluar/list/KasKeluarListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class KasKeluarListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.kasKeluar.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kasKeluar.list.title')}
          </PageTitle>

          <KasKeluarListToolbar />
          <KasKeluarListFilter />
          <KasKeluarListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KasKeluarListPage;
