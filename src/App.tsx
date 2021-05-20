import PageContainer from 'components/PageContainer/PageContainer'
import EmployeeForm from 'pages/EmployeeForm/EmployeeForm'
import GlobalStyle from 'styles/GlobalStyles'

function App() {
  return (
    <PageContainer>
      <GlobalStyle />
      <EmployeeForm />
    </PageContainer>
  )
}

export default App
