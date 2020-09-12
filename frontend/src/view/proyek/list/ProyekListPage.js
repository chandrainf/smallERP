import React, { Component } from 'react';
import ProyekListFilter from 'view/proyek/list/ProyekListFilter';
import ProyekListTable from 'view/proyek/list/ProyekListTable';
import ProyekListToolbar from 'view/proyek/list/ProyekListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ProyekListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.proyek.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.proyek.list.title')}
          </PageTitle>

          <ProyekListToolbar />
          <ProyekListFilter />
          <ProyekListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default ProyekListPage;
