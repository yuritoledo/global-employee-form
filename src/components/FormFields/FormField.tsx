/* eslint-disable jsx-a11y/control-has-associated-label */
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { useField } from 'formik'
import { useMemo } from 'react'
import { Countries, FormValues } from 'types'
import {
  Container, Input, ExtendedLabel,
} from './styles'

interface Props {
  label: string
  name: keyof FormValues
  type?: 'text' | 'number'
  countryOfWork?: string
}

const FormField = (props: Props) => {
  const {
    label,
    name,
    countryOfWork,
    type = 'text',
  } = props

  const [value, meta] = useField(name)

  const extendedLabel = useMemo(() => {
    if (countryOfWork === Countries.Brazil) return '(max 40 days)'
    if (countryOfWork === Countries.Spain) return '(max 30 days)'

    return ''
  }, [countryOfWork])

  const hasError = Boolean(meta.touched && meta.error)

  return (
    <Container>
      <label htmlFor={name}>
        <span>{label}</span>
        <ExtendedLabel>{extendedLabel}</ExtendedLabel>
      </label>

      <Input
        type={type}
        id={name}
        {...value}
      />

      <ErrorMessage show={hasError}>
        {meta.error}
      </ErrorMessage>
    </Container>
  )
}

export default FormField
