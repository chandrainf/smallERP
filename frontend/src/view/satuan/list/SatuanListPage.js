import React, { Component } from 'react';
import SatuanListFilter from 'view/satuan/list/SatuanListFilter';
import SatuanListTable from 'view/satuan/list/SatuanListTable';
import SatuanListToolbar from 'view/satuan/list/SatuanListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class SatuanListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.satuan.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.satuan.list.title')}
          </PageTitle>

          <SatuanListToolbar />
          <SatuanListFilter />
          <SatuanListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default SatuanListPage;
