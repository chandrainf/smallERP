import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/permintaanPerbaikan/list/permintaanPerbaikanListActions';
import destroyActions from 'modules/permintaanPerbaikan/destroy/permintaanPerbaikanDestroyActions';
import selectors from 'modules/permintaanPerbaikan/list/permintaanPerbaikanListSelectors';
import destroySelectors from 'modules/permintaanPerbaikan/destroy/permintaanPerbaikanDestroySelectors';
import model from 'modules/permintaanPerbaikan/permintaanPerbaikanModel';
import permintaanPerbaikanSelectors from 'modules/permintaanPerbaikan/permintaanPerbaikanSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import DaftarAlatListItem from 'view/daftarAlat/list/DaftarAlatListItem';
import ProyekListItem from 'view/proyek/list/ProyekListItem';
import MekanikListItem from 'view/mekanik/list/MekanikListItem';

const { fields } = model;

class PermintaanPerbaikanListTable extends Component {
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
    fields.daftarAlat.forTable({
      render: (value) => (
        <DaftarAlatListItem value={value} />
      ),
    }),
    fields.proyek.forTable({
      render: (value) => <ProyekListItem value={value} />,
    }),
    fields.mekanik.forTable({
      render: (value) => <MekanikListItem value={value} />,
    }),
    fields.diketahui,
    fields.disetujui,
    fields.createdAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/permintaanPerbaikan/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link
              to={`/permintaanPerbaikan/${record.id}/edit`}
            >
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
    hasPermissionToEdit: permintaanPerbaikanSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: permintaanPerbaikanSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(
  PermintaanPerbaikanListTable,
);
