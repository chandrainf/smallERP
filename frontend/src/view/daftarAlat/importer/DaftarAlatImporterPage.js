import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/daftarAlat/importer/daftarAlatImporterSelectors';
import actions from 'modules/daftarAlat/importer/daftarAlatImporterActions';
import fields from 'modules/daftarAlat/importer/daftarAlatImporterFields';

class DaftarAlatImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.daftarAlat.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.daftarAlat.menu'),
              '/daftarAlat',
            ],
            [i18n('entities.daftarAlat.importer.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.daftarAlat.importer.title')}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default DaftarAlatImportPage;
