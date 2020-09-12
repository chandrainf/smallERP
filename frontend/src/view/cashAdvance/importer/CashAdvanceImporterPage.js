import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/cashAdvance/importer/cashAdvanceImporterSelectors';
import actions from 'modules/cashAdvance/importer/cashAdvanceImporterActions';
import fields from 'modules/cashAdvance/importer/cashAdvanceImporterFields';

class CashAdvanceImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.cashAdvance.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.cashAdvance.menu'),
              '/cashAdvance',
            ],
            [i18n('entities.cashAdvance.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.cashAdvance.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default CashAdvanceImportPage;
