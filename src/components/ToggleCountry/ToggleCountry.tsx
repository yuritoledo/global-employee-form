import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { useFormikContext } from 'formik'
import { FormValues } from 'types'
import { Option, List } from './styles'

interface Props {
  name: string
}

interface Contry {
  id: string
  name: string
}

const contryOptions: Contry[] = [
  { id: '1', name: '🇪🇸 Spain' },
  { id: '2', name: '🇬🇭 Ghana' },
  { id: '3', name: '🇧🇷 Brazil' },
]

const ToggleCountry = (props: Props) => {
  const { name } = props
  const {
    setFieldValue,
    values,
    getFieldMeta,
  } = useFormikContext<FormValues>()

  const onClick = (id: string) => {
    setFieldValue(name, id, false)
  }

  const meta = getFieldMeta(name)

  const hasError = Boolean(meta.touched && meta.error)

  return (
    <>
      <span>Pick a country</span>
      <List>
        {contryOptions.map((country) => (
          <Option
            isSelected={values.countryOfWork === country.id}
            key={country.id}
            onClick={() => onClick(country.id)}
            type="button"
          >
            {country.name}
          </Option>
        ))}
      </List>
      <ErrorMessage show={hasError}>
        {meta.error}
      </ErrorMessage>
    </>
  )
}

export default ToggleCountry
