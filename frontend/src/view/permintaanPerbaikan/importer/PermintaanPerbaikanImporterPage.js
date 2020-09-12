import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';
import importerHoc from 'view/shared/importer/Importer';
import selectors from 'modules/permintaanPerbaikan/importer/permintaanPerbaikanImporterSelectors';
import actions from 'modules/permintaanPerbaikan/importer/permintaanPerbaikanImporterActions';
import fields from 'modules/permintaanPerbaikan/importer/permintaanPerbaikanImporterFields';

class PermintaanPerbaikanImportPage extends Component {
  render() {
    const Importer = importerHoc(
      selectors,
      actions,
      fields,
      i18n('entities.permintaanPerbaikan.importer.hint'),
    );

    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [
              i18n('entities.permintaanPerbaikan.menu'),
              '/permintaanPerbaikan',
            ],
            [
              i18n(
                'entities.permintaanPerbaikan.importer.title',
              ),
            ],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n(
              'entities.permintaanPerbaikan.importer.title',
            )}
          </PageTitle>

          <Importer />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default PermintaanPerbaikanImportPage;
