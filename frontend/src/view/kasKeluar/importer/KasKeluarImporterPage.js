import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/kasKeluar/importer/kasKeluarImporterSelectors';
import actions from 'modules/kasKeluar/importer/kasKeluarImporterActions';
import fields from 'modules/kasKeluar/importer/kasKeluarImporterFields';

class KasKeluarImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.kasKeluar.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.kasKeluar.menu'), '/kasKeluar'],
            [i18n('entities.kasKeluar.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.kasKeluar.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default KasKeluarImportPage;
