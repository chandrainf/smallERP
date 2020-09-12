import {
  Button,
  Form,
  Row,
  Col,
  Divider,
  Popconfirm,
} from 'antd';
import { Formik, FieldArray } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/permintaanPerbaikan/permintaanPerbaikanModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import DaftarAlatAutocompleteFormItem from 'view/daftarAlat/autocomplete/DaftarAlatAutoCompleteFormItem';
import ProyekAutocompleteFormItem from 'view/proyek/autocomplete/ProyekAutoCompleteFormItem';
import MekanikAutocompleteFormItem from 'view/mekanik/autocomplete/MekanikAutoCompleteFormItem';
import _get from 'lodash/get';

const { fields } = model;

class PermintaanPerbaikanForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.daftarAlat,
    fields.proyek,
    fields.mekanik,
    fields.diketahui,
    fields.disetujui,
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
                <DaftarAlatAutocompleteFormItem
                  name={fields.daftarAlat.name}
                  label={fields.daftarAlat.label}
                  required={fields.daftarAlat.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <ProyekAutocompleteFormItem
                  name={fields.proyek.name}
                  label={fields.proyek.label}
                  required={fields.proyek.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <MekanikAutocompleteFormItem
                  name={fields.mekanik.name}
                  label={fields.mekanik.label}
                  required={fields.mekanik.required}
                  showCreate={!this.props.modal}
                  form={form}
                  mode="multiple"
                />
                <InputFormItem
                  name={fields.diketahui.name}
                  label={fields.diketahui.label}
                  required={fields.diketahui.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.disetujui.name}
                  label={fields.disetujui.label}
                  required={fields.disetujui.required}
                  autoFocus
                />
                <FieldArray
                  name="keluhan"
                  render={(arrayHelpers) => {
                    const keluhan = _get(
                      form,
                      'values.keluhan',
                      [],
                    );

                    if (!keluhan.length) {
                      return (
                        <Form.Item
                          {...formItemLayout}
                          label="Tidak ada keluhan"
                        >
                          <Button
                            onClick={() =>
                              arrayHelpers.push({
                                id: `PP${Date.now()}`,
                              })
                            }
                            style={{ marginRight: 10 }}
                            type="primary"
                            icon="plus"
                          />
                        </Form.Item>
                      );
                    }

                    return keluhan.map(
                      (item, index, items) => (
                        <div
                          key={item.id}
                          style={{ marginBottom: 20 }}
                        >
                          <Form.Item
                            {...formItemLayout}
                            label="Keluhan"
                          >
                            <Row
                              type="flex"
                              justify="start"
                            >
                              <Col span={8}>#{item.id}</Col>
                              <Col
                                span={16}
                                style={{
                                  textAlign: 'right',
                                }}
                              >
                                {index ===
                                  items.length - 1 && (
                                  <Button
                                    onClick={() =>
                                      arrayHelpers.push({
                                        id: `D${Date.now()}`,
                                      })
                                    }
                                    style={{
                                      marginRight: 10,
                                    }}
                                    type="primary"
                                    icon="plus"
                                  />
                                )}
                                <Popconfirm
                                  placement="top"
                                  onConfirm={() =>
                                    arrayHelpers.remove(
                                      index,
                                    )
                                  }
                                  okText="Yes"
                                  cancelText="No"
                                  title={`Apakah Anda yakin untuk menghapus keluhan?`}
                                >
                                  <Button
                                    type="danger"
                                    icon="delete"
                                  />
                                </Popconfirm>
                              </Col>
                            </Row>
                          </Form.Item>

                          <InputFormItem
                            name={`keluhan.${index}.keluhan`}
                            label={
                              fields.keluhan.fields.keluhan
                                .label
                            }
                            required={
                              fields.keluhan.fields.keluhan
                                .required
                            }
                          />
                          <InputFormItem
                            name={`keluhan.${index}.analisa`}
                            label={
                              fields.keluhan.fields.analisa
                                .label
                            }
                            required={
                              fields.keluhan.fields.analisa
                                .required
                            }
                          />
                          <ImagesFormItem
                            name={`keluhan.${index}.foto`}
                            label={
                              fields.keluhan.fields.foto
                                .label
                            }
                            required={
                              fields.keluhan.fields.foto
                                .required
                            }
                            path={
                              fields.keluhan.fields.foto
                                .path
                            }
                            schema={
                              fields.keluhan.fields.foto
                                .schema
                            }
                            max={
                              fields.keluhan.fields.foto.max
                            }
                          />

                          <InputFormItem
                            name={`keluhan.${index}.tindakan`}
                            label={
                              fields.keluhan.fields.tindakan
                                .label
                            }
                            required={
                              fields.keluhan.fields.tindakan
                                .required
                            }
                          />
                          <DatePickerFormItem
                            name={`keluhan.${index}.pemeriksaan`}
                            label={
                              fields.keluhan.fields
                                .pemeriksaan.label
                            }
                            required={
                              fields.keluhan.fields
                                .pemeriksaan.required
                            }
                          />
                          <InputFormItem
                            name={`keluhan.${index}.keterangan`}
                            label={
                              fields.keluhan.fields
                                .keterangan.label
                            }
                            required={
                              fields.keluhan.fields
                                .keterangan.required
                            }
                          />
                          <Divider />
                        </div>
                      ),
                    );
                  }}
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

export default PermintaanPerbaikanForm;
