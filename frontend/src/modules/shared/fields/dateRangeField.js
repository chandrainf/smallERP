import GenericField from 'modules/shared/fields/genericField';
import * as yup from 'yup';
import moment from 'moment';
import { i18n } from 'i18n';

export default class DateRangeField extends GenericField {
  forFilter() {
    return yup
      .array()
      .of(
        yup
          .mixed()
          .nullable(true)
          .label(this.label)
          .test(
            'is-date',
            i18n('validation.mixed.default'),
            (value) => {
              if (!value) {
                return true;
              }

              return moment(value, 'DD-MM-YYYY').isValid();
            },
          )
          .transform((value) =>
            value
              ? moment(value).format('DD-MM-YYYY')
              : null,
          ),
      )
      .label(this.label);
  }

  forFormInitialValue(value) {
    if (!value || !value.length) {
      return [];
    }

    return value.map((item) =>
      item ? moment(item, 'DD-MM-YYYY') : null,
    );
  }
}
