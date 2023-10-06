import { Row, Col, Container } from 'react-bootstrap'
import './App.css'
import { HeaderNews } from './components/HeaderNews'
import { Search } from './components/Search'

const HeaderNewslink = [
    {title: 'Сечайс в СМИ', link: '!#'},
    {title: 'В Германии', link: '!#'},
    {title: 'Рекомендуем', link: '!#'},
]

const HeaderNewsList = [
    {text: 'Сечайс в СМИ', srcImg: '../'},
    {text: 'В Германии', srcImg: '../'},
    {text: 'Рекомендуем', srcImg: '../'},
]

const MainNewslink = [
    {title: 'Сечайс в СМИ', link: '!#'},
]

function App() {

  return (
    <Container>
        <Row>
            <Col>
                <HeaderNews 
                    listLink={HeaderNewslink} 
                    listNews={HeaderNewsList}
                />
            </Col>
          
        </Row>
        <Row>
            <Search/>
        </Row>
        <Row>
            <Col>
                <HeaderNews
                    listLink={MainNewslink} 
                    listNews={HeaderNewsList}
                />
            </Col>
            <Col>
                <HeaderNews
                    listLink={HeaderNewslink} 
                    listNews={HeaderNewsList}
                />
            </Col>
            <Col>
                <HeaderNews
                    listLink={HeaderNewslink} 
                    listNews={HeaderNewsList}
                />
            </Col>
        </Row>

    </Container>
  )
}

export default App
