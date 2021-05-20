import FormField from 'components/FormFields/FormField'
import Select from 'components/FormFields/Select'
import ToggleCountry from 'components/ToggleCountry/ToggleCountry'
import { FormikProvider, useFormik } from 'formik'
import { useMemo } from 'react'
import { Countries, FormValues } from 'types'
import schema from './formSchema'
import {
  Container,
  Button,
  Form,
  Title,
} from './styles'

const maritalStatusOptions = [
  'Single',
  'Married',
  'Widowed',
  'Divorced',
  'Separated',
]

const initialValues: FormValues = {
  countryOfWork: Countries.Empty,
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  holidayAllowance: '',
  maritalStatus: '',
  numberOfChildren: '',
  workingHours: '',
  socialInsuranceNumber: '',
}

const EmployeeForm = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values)
  }

  const form = useFormik<FormValues>({
    initialValues,
    onSubmit,
    validationSchema: schema,
    validateOnChange: false,
  })

  const { countryOfWork } = form.values
  const isCountrySpain = useMemo(() => countryOfWork === Countries.Spain, [countryOfWork])
  const isCountryGhana = useMemo(() => countryOfWork === Countries.Ghana, [countryOfWork])
  const isCountryBrazil = useMemo(() => countryOfWork === Countries.Brazil, [countryOfWork])

  return (
    <Container>
      <Title>Employee Form</Title>
      <FormikProvider value={form}>
        <Form onSubmit={form.handleSubmit}>
          <ToggleCountry
            name="countryOfWork"
          />

          <FormField
            label="First name"
            name="firstName"
          />

          <FormField
            label="Last name"
            name="lastName"
          />

          <FormField
            label="Date of birth"
            name="dateOfBirth"
          />

          <FormField
            label="Holiday allowance"
            name="holidayAllowance"
            countryOfWork={countryOfWork}
          />

          {isCountrySpain && (
            <FormField
              label="Social insurance number"
              name="socialInsuranceNumber"
            />
          )}

          {(isCountrySpain || isCountryGhana) && (
            <Select
              label="Marital Status"
              name="maritalStatus"
              options={maritalStatusOptions}
            />
          )}

          {isCountryGhana && (
            <FormField
              label="Number of children"
              name="numberOfChildren"
            />
          )}

          {isCountryBrazil && (
            <FormField
              label="Working hours"
              name="workingHours"
            />
          )}

          <Button type="submit">Save employee</Button>
        </Form>
      </FormikProvider>
    </Container>
  )
}

export default EmployeeForm
