import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory,useNavigate ,useLocation} from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useNavigate()
    const location = useLocation();

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history(`/?keyword=${keyword}&page=1`)
        } else {
            history(history(history.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className=' ml-sm-5'
            >


            </Form.Control>


        </Form>
    )
}

export default SearchBox