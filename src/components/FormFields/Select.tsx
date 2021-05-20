import { useField } from 'formik'
import { Container } from './styles'

interface Props {
  label: string
  name: string
  options: string[]
}

const Select = (props: Props) => {
  const { label, name, options } = props
  const [field] = useField('maritalStatus')

  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...field}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  )
}

export default Select
