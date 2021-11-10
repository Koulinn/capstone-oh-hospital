import { io } from 'socket.io-client'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Chat from './views/Chat/Chat';
import {Container} from 'react-bootstrap'
import Dashboard from './views/Dashboard/Dashboard';
import NavigationBar from './components/Navigation/NavigationBar';



// const ADDRESS = process.env.REACT_APP_API_URL
// export const socket = io(ADDRESS, { transports: ['websocket'] })

function App() {

  return (

    <Container fluid>

      <Router>
      <NavigationBar/>

        <Route path="/chat" exact render={(routerProps) =>
          <Chat {...routerProps} />}>
        </Route>
        <Route path="/" exact render={(routerProps) =>
          <Dashboard {...routerProps} />}>
        </Route>
      </Router>
    </Container>
  )
}

export default App;
