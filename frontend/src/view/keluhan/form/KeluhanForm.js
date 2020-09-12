import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/keluhan/keluhanModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';

const { fields } = model;

class KeluhanForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.keluhan,
    fields.analisa,
    fields.tindakan,
    fields.foto,
    fields.pemeriksaan,
    fields.keterangan,
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
                  name={fields.keluhan.name}
                  label={fields.keluhan.label}
                  required={fields.keluhan.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.analisa.name}
                  label={fields.analisa.label}
                  required={fields.analisa.required}
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

                <InputFormItem
                  name={fields.tindakan.name}
                  label={fields.tindakan.label}
                  required={fields.tindakan.required}
                />

                <DatePickerFormItem
                  name={fields.pemeriksaan.name}
                  label={fields.pemeriksaan.label}
                  required={fields.pemeriksaan.required}
                />

                <InputFormItem
                  name={fields.keterangan.name}
                  label={fields.keterangan.label}
                  required={fields.keterangan.required}
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

export default KeluhanForm;
