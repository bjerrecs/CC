import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { BsFillPlusCircleFill } from "react-icons/bs";


function AddOneItem(props) {

    var id = props.id

    const handleSend = async() => {
        try {
            await axios.post("/api/warehouse/addone/item", {
                id
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
      <div>
          <Form onSubmit={handleSend}>
          <Form.Group className="mb-3">
                <Form.Control type="hidden" defaultValue={props.id} id="id" name="id"/>
            </Form.Group>   
            <Button >
                <BsFillPlusCircleFill />
            </Button>
          </Form>
      </div>
    );
  }
  
  export default AddOneItem;
  