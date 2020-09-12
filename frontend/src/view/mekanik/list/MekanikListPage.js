import React, { Component } from 'react';
import MekanikListFilter from 'view/mekanik/list/MekanikListFilter';
import MekanikListTable from 'view/mekanik/list/MekanikListTable';
import MekanikListToolbar from 'view/mekanik/list/MekanikListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class MekanikListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.mekanik.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.mekanik.list.title')}
          </PageTitle>

          <MekanikListToolbar />
          <MekanikListFilter />
          <MekanikListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default MekanikListPage;
