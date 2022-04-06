import React from 'react';
import Titulo from '../Titulo';
import {Card} from 'react-bootstrap';
import './style.css';

export default function ListaDeLivros() {
  return (
      <div>
        <Titulo />
        <div className="fileiraUM">
          <Card style={{ width: '18rem' }} id="teste">
            <Card.Img id="img" variant="top" src="assets/sol-flores.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>O que o sol faz com as flores</Card.Title>
              <Card.Text>
                R$139,99
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/ohobbit.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>Box Trilogia O Senhor dos Anéis</Card.Title>
              <Card.Text>
                R$21,90
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/got.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>Box Game of Thrones</Card.Title>
              <Card.Text>
                R$202,90
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/opp.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>O Pequeno Principe</Card.Title>
              <Card.Text>
                R$9,90
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/laranja.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>Laranja Mecânica</Card.Title>
              <Card.Text>
                R$53,90
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="fileiraDOIS">
          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/percy-mar.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>Percy Jackson: O Mar de Monstro Volume2</Card.Title>
              <Card.Text>
              R$23,90
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/barril-risadas.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>Um barril de risadas, um vale de lágrimas</Card.Title>
              <Card.Text>
              R$35,90
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/at.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>A Elite</Card.Title>
              <Card.Text>
              R$36,90
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/opda.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>O Poder Da Ação</Card.Title>
              <Card.Text>
                R$237,99
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img id="img" variant="top" src="assets/mpdbc.jpg" height="160px" width=""/>
            <Card.Body>
              <Card.Title>Memórias Póstumas de Brás Cubas</Card.Title>
              <Card.Text>
                R$13,90
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
    </div>
  )
}