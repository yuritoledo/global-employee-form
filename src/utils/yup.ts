import * as yup from 'yup'

export const stringRequired = () => yup.string().trim().required()
export const numberRequired = () => yup.number().required()

export const stringNotRequired = () => yup.string().trim().notRequired()

export const stringFieldsAsNumber = () => stringRequired().matches(/^[0-9]+$/, 'Must be only digits please')

yup.setLocale({
  mixed: {
    required: 'Please fill this field',
  },
})

export { yup }
