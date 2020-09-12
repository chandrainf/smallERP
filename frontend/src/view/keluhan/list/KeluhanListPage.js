import React, { Component } from 'react';
import KeluhanListFilter from 'view/keluhan/list/KeluhanListFilter';
import KeluhanListTable from 'view/keluhan/list/KeluhanListTable';
import KeluhanListToolbar from 'view/keluhan/list/KeluhanListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class KeluhanListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.keluhan.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.keluhan.list.title')}
          </PageTitle>

          <KeluhanListToolbar />
          <KeluhanListFilter />
          <KeluhanListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KeluhanListPage;
