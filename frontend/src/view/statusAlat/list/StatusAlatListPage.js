import React, { Component } from 'react';
import StatusAlatListFilter from 'view/statusAlat/list/StatusAlatListFilter';
import StatusAlatListTable from 'view/statusAlat/list/StatusAlatListTable';
import StatusAlatListToolbar from 'view/statusAlat/list/StatusAlatListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class StatusAlatListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.statusAlat.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.statusAlat.list.title')}
          </PageTitle>

          <StatusAlatListToolbar />
          <StatusAlatListFilter />
          <StatusAlatListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default StatusAlatListPage;
