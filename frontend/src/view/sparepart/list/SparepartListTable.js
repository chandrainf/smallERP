import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/sparepart/list/sparepartListActions';
import destroyActions from 'modules/sparepart/destroy/sparepartDestroyActions';
import selectors from 'modules/sparepart/list/sparepartListSelectors';
import destroySelectors from 'modules/sparepart/destroy/sparepartDestroySelectors';
import model from 'modules/sparepart/sparepartModel';
import sparepartSelectors from 'modules/sparepart/sparepartSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import ImagesListView from 'view/shared/list/ImagesListView';
import SatuanListItem from 'view/satuan/list/SatuanListItem';

const { fields } = model;

class SparepartListTable extends Component {
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
    fields.partNumber.forTable(),
    fields.item.forTable(),
    fields.merk.forTable(),
    fields.satuan.forTable({
      render: (value) => <SatuanListItem value={value} />,
    }),
    fields.harga.forTable(),
    fields.stok.forTable(),
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
          <Link to={`/sparepart/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/sparepart/${record.id}/edit`}>
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
    hasPermissionToEdit: sparepartSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: sparepartSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(SparepartListTable);
