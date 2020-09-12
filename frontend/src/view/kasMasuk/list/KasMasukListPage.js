import React, { Component } from 'react';
import KasMasukListFilter from 'view/kasMasuk/list/KasMasukListFilter';
import KasMasukListTable from 'view/kasMasuk/list/KasMasukListTable';
import KasMasukListToolbar from 'view/kasMasuk/list/KasMasukListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class KasMasukListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.kasMasuk.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kasMasuk.list.title')}
          </PageTitle>

          <KasMasukListToolbar />
          <KasMasukListFilter />
          <KasMasukListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KasMasukListPage;
