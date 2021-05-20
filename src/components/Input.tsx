import { useField } from 'formik'

interface Props {
  label: string
  name: string
}

const Input = (props: Props) => {
  const { label, name } = props
  const [value, meta] = useField(name)

  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input {...value} id={name} />

      {meta.touched && meta.error && (
        <p>{meta.error}</p>
      )}
    </>
  )
}

export default Input
