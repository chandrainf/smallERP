import React, { Component } from 'react';
import PermintaanPerbaikanListFilter from 'view/permintaanPerbaikan/list/PermintaanPerbaikanListFilter';
import PermintaanPerbaikanListTable from 'view/permintaanPerbaikan/list/PermintaanPerbaikanListTable';
import PermintaanPerbaikanListToolbar from 'view/permintaanPerbaikan/list/PermintaanPerbaikanListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class PermintaanPerbaikanListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.permintaanPerbaikan.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.permintaanPerbaikan.list.title',
            )}
          </PageTitle>

          <PermintaanPerbaikanListToolbar />
          <PermintaanPerbaikanListFilter />
          <PermintaanPerbaikanListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PermintaanPerbaikanListPage;
