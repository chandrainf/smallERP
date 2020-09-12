import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/daftarAlat/list/daftarAlatListActions';
import destroyActions from 'modules/daftarAlat/destroy/daftarAlatDestroyActions';
import selectors from 'modules/daftarAlat/list/daftarAlatListSelectors';
import destroySelectors from 'modules/daftarAlat/destroy/daftarAlatDestroySelectors';
import model from 'modules/daftarAlat/daftarAlatModel';
import daftarAlatSelectors from 'modules/daftarAlat/daftarAlatSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import ImagesListView from 'view/shared/list/ImagesListView';
import ProyekListItem from 'view/proyek/list/ProyekListItem';

const { fields } = model;

class DaftarAlatListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.kodeAlat.forTable(),
    fields.namaAlat.forTable(),
    fields.merk.forTable(),
    fields.model.forTable(),
    fields.kapasitas.forTable(),
    fields.nomorRangka.forTable(),
    fields.nomorMesin.forTable(),
    fields.nomorPlat.forTable(),
    fields.tahunPembuatan.forTable(),
    fields.tahunRegistrasi.forTable(),
    fields.proyek.forTable({
      render: (value) => <ProyekListItem value={value} />,
    }),
    fields.status.forTable(),
    fields.kepemilikan.forTable(),
    fields.SIA.forTable(),
    fields.STNK.forTable(),
    fields.pajak.forTable(),
    fields.KIR.forTable(),
    fields.foto.forTable({
      render: (value) => <ImagesListView value={value} />,
    }),
    fields.createdAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/daftarAlat/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/daftarAlat/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: daftarAlatSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: daftarAlatSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(DaftarAlatListTable);
