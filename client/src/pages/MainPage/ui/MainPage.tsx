import { Container, Card, Col, Row,Button} from "react-bootstrap";
import { useEffect } from "react";
import { useAppSelector } from "@/shared/hooks/reduxHooks";

import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTES } from "@/shared/enums/clientRoutes";
import AuthChoice from "@/widgets/AuthChoice/AuthChoice";


export function MainPage(): JSX.Element {
  const user = useAppSelector((state) => state.user.user);
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Main Page'
}, [])

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Row className="w-100 justify-content-center">
      <Col md={8} lg={6}>
        <Card className="shadow-lg p-4 bg-light rounded-4 text-center">
          <Card.Body>
            <Card.Title className="display-5 fw-bold text-primary">
              Привет, {user?.username || "пользователь"}!
            </Card.Title>
            <Card.Text className="lead mt-3">
              {!user? 'Чтобы сыграть в игру, авторизируйся или зарегистрируйся!' :  'Нажми кнопку для начала игры'}
              <br></br>
              {!user && <AuthChoice/>}
              {user &&   
              <Button   variant="primary" className="mt-3" 
                onClick={() => navigate(CLIENT_ROUTES.GAME)}>Начать игру</Button>}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  

  );
}

