import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      {/* <Logo /> */}
      <Header>Zamara App</Header>
      <Paragraph>
        Your Financial and Insurance partner powering your prosperity.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
      >
        Login
      </Button>
    </Background>
  )
}