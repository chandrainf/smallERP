import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/sparepart/sparepartModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
//import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import SatuanAutocompleteFormItem from 'view/satuan/autocomplete/SatuanAutoCompleteFormItem';

const { fields } = model;

class SparepartForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.partNumber,
    fields.item,
    fields.merk,
    fields.satuan,
    fields.harga,
    fields.stok,
    fields.foto,
  ]);

  handleSubmit = (values) => {
    const { id, ...data } = this.schema.cast(values);
    this.props.onSubmit(id, data);
  };

  initialValues = () => {
    const record = this.props.record;
    return this.schema.initialValues(record || {});
  };

  renderForm() {
    const { saveLoading, isEditing } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {isEditing && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.partNumber.name}
                  label={fields.partNumber.label}
                  required={fields.partNumber.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.item.name}
                  label={fields.item.label}
                  required={fields.item.required}
                />
                <InputFormItem
                  name={fields.merk.name}
                  label={fields.merk.label}
                  required={fields.merk.required}
                />
                <SatuanAutocompleteFormItem
                  name={fields.satuan.name}
                  label={fields.satuan.label}
                  required={fields.satuan.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <InputFormItem
                  name={fields.harga.name}
                  label={fields.harga.label}
                  required={fields.harga.required}
                />
                <InputFormItem
                  name={fields.stok.name}
                  label={fields.stok.label}
                  required={fields.stok.required}
                />
                <ImagesFormItem
                  name={fields.foto.name}
                  label={fields.foto.label}
                  required={fields.foto.required}
                  path={fields.foto.path}
                  schema={{
                    size: fields.foto.size,
                  }}
                  max={fields.foto.max}
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    onClick={form.handleSubmit}
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>

                  {this.props.onCancel ? (
                    <Button
                      disabled={saveLoading}
                      onClick={() => this.props.onCancel()}
                      icon="close"
                    >
                      {i18n('common.cancel')}
                    </Button>
                  ) : null}
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { isEditing, findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (isEditing && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

export default SparepartForm;
