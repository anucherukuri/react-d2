import { Navbar, Nav } from 'react-bootstrap'

// props is always an object
// it will contain any prop I'm invoking the component with

const MyNavbar = (props) => {
    console.log(props)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">StriveBooks - {props.payoff}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#contact">Browse</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

// this is a neater syntax, destructuring the payoff prop
// so you don't have to put props. props. etc.

// const MyNavbar = ({ payoff }) => (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Brand href="#home">Strivestaurant - {payoff}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="ml-auto">
//                 <Nav.Link href="#features">Menu</Nav.Link>
//                 <Nav.Link href="#pricing">Booking</Nav.Link>
//                 <Nav.Link href="#contact">Contact us!</Nav.Link>
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>
// )

export default MyNavbar