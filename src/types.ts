export enum Countries {
  Empty = '',
  Spain = '1',
  Ghana = '2',
  Brazil = '3',
}

export interface FormValues {
  countryOfWork: Countries
  firstName: string
  lastName: string
  dateOfBirth: string
  holidayAllowance: string
  maritalStatus?: string
  socialInsuranceNumber?: string
  numberOfChildren?: string
  workingHours?: string
}
