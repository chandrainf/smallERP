import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/purchaseRequest/importer/purchaseRequestImporterSelectors';
import actions from 'modules/purchaseRequest/importer/purchaseRequestImporterActions';
import fields from 'modules/purchaseRequest/importer/purchaseRequestImporterFields';

class PurchaseRequestImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.purchaseRequest.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.purchaseRequest.menu'),
              '/purchaseRequest',
            ],
            [
              i18n(
                'entities.purchaseRequest.importer.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.purchaseRequest.importer.title',
            )}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PurchaseRequestImportPage;
