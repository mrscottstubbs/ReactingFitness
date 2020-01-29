import React from 'react';
import './main.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'

function main() {
  return (
    <div className="main">
      <header className="main-header">

        Reacting Fitness

        <Tabs defaultActiveKey="days" id="days">
          <Tab eventKey="Monday" title="Monday">
            <br />

              <Tabs id="routines">
                <Tab eventKey="Lift" title="Lift">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                    </InputGroup.Prepend>
                    <FormControl aria-label="Text input with checkbox" />
                    <FormControl />
                  </InputGroup>
                </Tab>
                <Tab eventKey="Meal" title="Meal">

                </Tab>
              </Tabs>

          </Tab>
          <Tab eventKey="Tuesday" title="Tuesday">

          </Tab>
          <Tab eventKey="Wednesday" title="Wednesday">

          </Tab>
          <Tab eventKey="Thursday" title="Thursday">

          </Tab>
          <Tab eventKey="Friday" title="Friday">

          </Tab>
          <Tab eventKey="Saturday" title="Saturday">

          </Tab>
          <Tab eventKey="Sunday" title="Sunday">

          </Tab>
        </Tabs>


      </header>
    </div>
  );
}

export default main;
