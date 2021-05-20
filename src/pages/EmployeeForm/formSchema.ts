import { Countries } from 'types'
import {
  stringFieldsAsNumber,
  stringRequired,
  numberRequired,
  yup,
  stringNotRequired,
} from 'utils/yup'

const maritalStatus = yup.string()
  .when('countryOfWork', {
    is: Countries.Ghana || Countries.Spain,
    then: stringRequired(),
    otherwise: stringNotRequired(),
  })

const numberOfChildren = yup.string()
  .when('countryOfWork', {
    is: Countries.Ghana,
    then: stringFieldsAsNumber(),
    otherwise: stringNotRequired(),
  })

const workingHours = yup.string()
  .when('countryOfWork', {
    is: Countries.Brazil,
    then: stringFieldsAsNumber(),
    otherwise: stringNotRequired(),
  })

const socialInsuranceNumber = yup.string()
  .when('countryOfWork', {
    is: Countries.Spain,
    then: stringFieldsAsNumber(),
    otherwise: stringNotRequired(),
  })

const holidayAllowance = yup.number()
  .when('countryOfWork', {
    is: Countries.Spain,
    then: numberRequired().max(30, 'Please fill up to 30 days'),
  })
  .when('countryOfWork', {
    is: Countries.Brazil,
    then: numberRequired().max(40, 'Please fill up to 40 days'),
  })
  .when('countryOfWork', {
    is: Countries.Ghana,
    then: numberRequired(),
  })

const schema = yup.object({
  countryOfWork: yup.string().required('Please pick a country'),
  firstName: stringRequired(),
  lastName: stringRequired(),
  dateOfBirth: stringRequired(),
  holidayAllowance,
  maritalStatus,
  numberOfChildren,
  workingHours,
  socialInsuranceNumber,
})

export default schema
