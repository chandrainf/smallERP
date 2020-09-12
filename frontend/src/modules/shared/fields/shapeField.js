import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';

export default class ShapeField extends GenericField {
  constructor(
    name,
    label,
    fields = {},
    options = {}
  ) {
    super(name, label);
    const { required } = {
      required: false,
      ...(options || {}),
    };

    this.required = required;
    this.fields = fields;
  }

  forTable(overrides) {
    const defaultRender = undefined;

    const {
      title = this.label,
      sorter = true,
      dataIndex = this.name,
      render = defaultRender,
      ...others
    } = overrides || {};

    return {
      ...others,
      title,
      sorter,
      dataIndex,
      render,
    };
  }

  forView(value) {
    return value;
  }

  forFormInitialValue(value) {
    return value || {};
  }

  forForm() {
    let yupChain = yup
      .object()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    const shape = {};

    Object.entries(this.fields).forEach(([key, field]) => {
      shape[key] = field.forForm();
    })

    yupChain = yup.object().shape(shape);

    return yupChain;
  }

  forFilter() {
    return yup
      .object()
      .nullable(true)
      .label(this.label);
  }

  forExport() {
    return yup.mixed().label(this.label);
  }

  forImport() {
    let yupChain = yup
      .object()
      .nullable(true)
      .label(this.label);

    if (this.required) {
      yupChain = yupChain.required();
    }

    return yupChain;
  }
}
