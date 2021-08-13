import { Navbar, Nav, Container, Form, Button, Modal,  } from 'react-bootstrap';
import {Rating } from 'react-simple-star-rating'
import {React, useState} from 'react';
import MovieList from '../MovieList/MovieList';





const Filter = ({setSearchCondition, setSelectRating, selectRating, setMovies, movies}) => {
    
    const [show, setShow] = useState(false);
    const [movieToAdd, setMovieToAdd] = useState({
        title:"",
        poster:"",
        description:"",
        rating:0, 
    })
    const handleAdd = () => {
        setMovies([...movies,movieToAdd]);
        setTimeout(()=>{
            setShow(false);
        },1500)
    };

    return (
        <Navbar bg="dark" variant="dark" style={{marginBottom: "2rem"}}>
            <Container>
                <Navbar.Brand href="#home">My Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Movies</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                </Nav>
                <Rating onClick={(x)=>setSelectRating(x) } ratingValue={selectRating} />
                <Form.Control 
                type="text" placeholder="Search movie" style={{width:"400px", marginLeft:"1rem"}} 
                onChange={(e)=>setSearchCondition(e.target.value.toLowerCase())} />
                <Button variant="warning" style={{marginLeft:"4rem"}} onClick={()=>setShow(true)}>Add Movie</Button>
                <Modal show={show} onHide={()=> setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Movie to Add</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Form>
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e)=> 
                        setMovieToAdd({...movieToAdd, title: e.target.value})} 
                        type="text" placeholder="Titre movie" />
                       
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={(e)=> setMovieToAdd({...movieToAdd, poster: e.target.value})} 
                        type="text" placeholder="Description" />
                       
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={(e)=>setMovieToAdd({...movieToAdd, description: e.target.value})} 
                        type="url" placeholder="Url Image" />
                       
                        <Form.Label>Rating</Form.Label>
                        <Form.Control onChange={(e)=> setMovieToAdd({...movieToAdd, tratingitle: e.target.value})} 
                        type="number" placeholder="Rating" />
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={()=> setShow(false)}>
                            Close</Button>
                            <Button variant="primary" onClick={handleAdd}>
                            Add Movie</Button>
                        </Modal.Footer>
                </Modal>
            </Container>
        </Navbar>
    );
}

export default Filter
