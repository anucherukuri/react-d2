import { Component } from 'react'
import { Carousel, Container, Row, Col, ListGroup } from 'react-bootstrap'
import books from '../data/fantasy.json'
// dishes is the array with 5 objects inside of it (each one being a pasta dish)

// .map() is an array method that modifies the objects and returns to you a new array
// const myArray = [1, 2, 3]
// const newArray = myArray.map(element => element + 1)
// newArray is now [2, 3, 4]

// now the final boss: select a pasta and show its comments
// 1) should find a way to select a pasta and remember it as time goes by
// 2) we can now show its comments in the bottom of the page
// 3) if we select a new pasta, the comment section should update

// for remembering things, you need a state.
// a state is a safe place that will keep pieces of info over time

// for having a state, you need a Class Component
// fortunately, converting a functional component into a class component is quite simple:

// 1) import { Component } from 'react' <-- Component is the MAIN COMPONENT CLASS we want to extend from
// 2) replace your function with a class
// 3) the only mandatory method in a class is called render()
// 4) put your JSX in the return statement of the render method

class Home extends Component {

    // use a class component when you need a state!
    // our goal is keeping track of the selected pasta
    state = {
        // all the things you want to keep track of will be properties of your state object
        selectedBook: null
        // let's set the initial value of selectedDish
    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <h2 className="my-2">Welcome to StriveBooks</h2>
                        <Carousel>
                            {
                                books.map(book => (
                                    <Carousel.Item key={book.asin}>
                                        {/* the key prop should be something unique */}
                                        {/* and should be applied to the parent element you're */}
                                        {/* returning out your map */}
                                        <img
                                            className="d-block w-100"
                                            src={book.image}
                                            alt="First slide"
                                            onClick={() =>
                                                // here I should change the selectedDish in the state
                                                // from initially null to a pasta
                                                // but the state is read-only
                                                // for changing it you have to use a method called setState()
                                                this.setState(
                                                    {
                                                        selectedBook: book
                                                    }
                                                )
                                                // setState is a method and takes an object as the argument
                                                // that object will be MERGED into the current state
                                            }
                                        />
                                        <Carousel.Caption>
                                            <h3>{book.name}</h3>
                                            <p>{book.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                {/* now the comments section! */}
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <ListGroup>
                            {
                                // the part before the && is just for not crash the application
                                // because initially selectedDish is null, and we cannot map the comments
                                // of something that is null!
                                // I'm checking if selectedDish has a truthy value to execute the map()
                                this.state.selectedBook && this.state.selectedBook.comments.map(c => (
                                    <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home