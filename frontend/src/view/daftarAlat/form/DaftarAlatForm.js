import { Button, Form, Tabs } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import model from 'modules/daftarAlat/daftarAlatModel';
import React, { Component } from 'react';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import RadioFormItem from 'view/shared/form/items/RadioFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import ProyekAutocompleteFormItem from 'view/proyek/autocomplete/ProyekAutoCompleteFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';

const { fields } = model;

class DaftarAlatForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.kodeAlat,
    fields.namaAlat,
    fields.merk,
    fields.model,
    fields.kapasitas,
    fields.nomorRangka,
    fields.nomorMesin,
    fields.nomorPlat,
    fields.tahunPembuatan,
    fields.tahunRegistrasi,
    fields.proyek,
    fields.status,
    fields.kepemilikan,
    fields.SIA,
    fields.STNK,
    fields.pajak,
    fields.KIR,
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

                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane
                    key="1"
                    tab="Tipe Alat Berat"
                  >
                    <ProyekAutocompleteFormItem
                      name={fields.proyek.name}
                      label={fields.proyek.label}
                      required={fields.proyek.required}
                      showCreate={!this.props.modal}
                      form={form}
                      mode="multiple"
                      autoFocus
                    />
                    <SelectFormItem
                      name={fields.status.name}
                      label={fields.status.label}
                      options={fields.status.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      required={fields.status.required}
                    />

                    <RadioFormItem
                      name={fields.kepemilikan.name}
                      label={fields.kepemilikan.label}
                      options={fields.kepemilikan.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      required={fields.kepemilikan.required}
                    />

                    <InputFormItem
                      name={fields.kodeAlat.name}
                      label={fields.kodeAlat.label}
                      required={fields.kodeAlat.required}
                    />
                    <InputFormItem
                      name={fields.namaAlat.name}
                      label={fields.namaAlat.label}
                      required={fields.namaAlat.required}
                    />
                    <InputFormItem
                      name={fields.merk.name}
                      label={fields.merk.label}
                      required={fields.merk.required}
                    />
                    <InputFormItem
                      name={fields.model.name}
                      label={fields.model.label}
                      required={fields.model.required}
                    />
                    <InputFormItem
                      name={fields.kapasitas.name}
                      label={fields.kapasitas.label}
                      required={fields.kapasitas.required}
                    />
                    <InputFormItem
                      name={fields.tahunPembuatan.name}
                      label={fields.tahunPembuatan.label}
                      required={
                        fields.tahunPembuatan.required
                      }
                    />
                    <InputFormItem
                      name={fields.tahunRegistrasi.name}
                      label={fields.tahunRegistrasi.label}
                      required={
                        fields.tahunRegistrasi.required
                      }
                    />
                    <DatePickerFormItem
                      name={fields.SIA.name}
                      label={fields.SIA.label}
                      required={fields.SIA.required}
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
                  </Tabs.TabPane>
                  <Tabs.TabPane
                    key="2"
                    tab="Tipe Kendaraan"
                  >
                    <ProyekAutocompleteFormItem
                      name={fields.proyek.name}
                      label={fields.proyek.label}
                      required={fields.proyek.required}
                      showCreate={!this.props.modal}
                      form={form}
                      mode="multiple"
                    />
                    <SelectFormItem
                      name={fields.status.name}
                      label={fields.status.label}
                      options={fields.status.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      required={fields.status.required}
                    />

                    <RadioFormItem
                      name={fields.kepemilikan.name}
                      label={fields.kepemilikan.label}
                      options={fields.kepemilikan.options.map(
                        (item) => ({
                          value: item.id,
                          label: item.label,
                        }),
                      )}
                      required={fields.kepemilikan.required}
                    />
                    <InputFormItem
                      name={fields.kodeAlat.name}
                      label={fields.kodeAlat.label}
                      required={fields.kodeAlat.required}
                      autoFocus
                    />
                    <InputFormItem
                      name={fields.namaAlat.name}
                      label={fields.namaAlat.label}
                      required={fields.namaAlat.required}
                    />
                    <InputFormItem
                      name={fields.merk.name}
                      label={fields.merk.label}
                      required={fields.merk.required}
                    />
                    <InputFormItem
                      name={fields.model.name}
                      label={fields.model.label}
                      required={fields.model.required}
                    />
                    <InputFormItem
                      name={fields.kapasitas.name}
                      label={fields.kapasitas.label}
                      required={fields.kapasitas.required}
                    />
                    <InputFormItem
                      name={fields.nomorRangka.name}
                      label={fields.nomorRangka.label}
                      required={fields.nomorRangka.required}
                    />
                    <InputFormItem
                      name={fields.nomorMesin.name}
                      label={fields.nomorMesin.label}
                      required={fields.nomorMesin.required}
                    />
                    <InputFormItem
                      name={fields.nomorPlat.name}
                      label={fields.nomorPlat.label}
                      required={fields.nomorPlat.required}
                    />
                    <InputFormItem
                      name={fields.tahunPembuatan.name}
                      label={fields.tahunPembuatan.label}
                      required={
                        fields.tahunPembuatan.required
                      }
                    />
                    <InputFormItem
                      name={fields.tahunRegistrasi.name}
                      label={fields.tahunRegistrasi.label}
                      required={
                        fields.tahunRegistrasi.required
                      }
                    />
                    <DatePickerFormItem
                      name={fields.STNK.name}
                      label={fields.STNK.label}
                      required={fields.STNK.required}
                    />
                    <DatePickerFormItem
                      name={fields.pajak.name}
                      label={fields.pajak.label}
                      required={fields.pajak.required}
                    />
                    <DatePickerFormItem
                      name={fields.KIR.name}
                      label={fields.KIR.label}
                      required={fields.KIR.required}
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
                  </Tabs.TabPane>
                </Tabs>

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

export default DaftarAlatForm;
