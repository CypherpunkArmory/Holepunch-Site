import React from 'react'
import { FormGroup, Label, Input, Col, Row } from 'reactstrap'

export default function BillingAddress({ handleUpdate }) {
  return (
    <>
      <FormGroup>
        <Label for="name" hidden>
          Name
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={handleUpdate}
        />
      </FormGroup>
      <FormGroup>
        <Label for="street1" hidden>
          Street Address 1
        </Label>
        <Input
          type="text"
          name="street1"
          id="street1"
          placeholder="Street Address 1"
          onChange={handleUpdate}
        />
      </FormGroup>
      <FormGroup>
        <Label for="street2" hidden>
          Street Address 2
        </Label>
        <Input
          type="text"
          name="street2"
          id="street2"
          placeholder="Street Address 2"
          onChange={handleUpdate}
        />
      </FormGroup>
      <FormGroup>
        <Label for="street2" hidden>
          City
        </Label>
        <Input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          onChange={handleUpdate}
        />
      </FormGroup>
      <Row form>
        <Col className="form-group" xs={6}>
          <Label for="country" hidden>
            Country
          </Label>
          <Input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            onChange={handleUpdate}
          />
        </Col>
        <Col className="form-group" xs={4}>
          <Label for="state" hidden>
            State
          </Label>
          <Input
            className="mr-1"
            type="text"
            name="state"
            id="state"
            placeholder="State"
            onChange={handleUpdate}
          />
        </Col>
        <Col className="form-group" xs={2}>
          <Label for="zip" hidden>
            Zip
          </Label>
          <Input
            type="text"
            name="zip"
            id="zip"
            placeholder="Zip"
            onChange={handleUpdate}
          />
        </Col>
      </Row>
    </>
  )
}
