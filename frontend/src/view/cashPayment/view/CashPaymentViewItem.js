import { Form } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { viewItemLayout } from 'view/shared/styles/ViewWrapper';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from 'modules/cashPayment/cashPaymentSelectors';

class CashPaymentViewItem extends Component {
  valueAsArray = () => {
    const { value } = this.props;

    if (!value) {
      return [];
    }

    if (Array.isArray(value)) {
      return value;
    }

    return [value];
  };

  displayableRecord = (record) => {
    if (this.props.hasPermissionToRead) {
      return (
        <div key={record.id}>
          <Link to={`/cashPayment/${record.id}`}>
            {record['nama']}
          </Link>
        </div>
      );
    }

    return <div key={record.id}>{record['nama']}</div>;
  };

  render() {
    if (!this.valueAsArray().length) {
      return null;
    }

    return (
      <Form.Item
        {...viewItemLayout}
        label={this.props.label}
      >
        {this.valueAsArray().map((value) =>
          this.displayableRecord(value),
        )}
      </Form.Item>
    );
  }
}

CashPaymentViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
};

const select = (state) => ({
  hasPermissionToRead: selectors.selectPermissionToRead(
    state,
  ),
});

export default connect(select)(CashPaymentViewItem);
