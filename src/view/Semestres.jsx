import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { Fab, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
//import PersonIcon from '@material-ui/icons/Person';

import {
  Button,
  Container,
  List,
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';

class Semestres extends Component {
  //  state = {  }
  titulo = 'LISTA DE SEMESTRES';
  semestres = [
    'PRIMERO',
    'SEGUNDO',
    'TERCERO',
    'CUARTO',
    'QUINTO',
    'SEXTO',
    'SEPTIMO',
    'OCTAVO',
    'RESIDENCIAS',
  ];

  frmIdSemestre = React.createRef();
  frmNombreSem = React.createRef();

  addSemestre = (event) => {
    console.log('Agregar semestre');
    event.preventDefault();
    console.log('Console mensaje');
    console.log(this.frmIdSemestre.value);
    console.log(this.frmNombreSem.value);
    this.semestres.push(this.frmNombreSem.value);
  };

  render() {
    return (
      <div className="App-semestres">
        <Link to="/">
          <Button
            variant="contained"
            color="default"
            size="small"
            startIcon={<HomeIcon />}
          >
            Regresar
          </Button>
        </Link>
        <form autoComplete="off" onSubmit={this.addSemestre}>
          <TextField
            label="IdSemestre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmIdSemestre = e)}
          />
          &nbsp;&nbsp;
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombreSem = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addSemestre}
          >
            <AddIcon />
          </Fab>
        </form>

        <List
          component="nav"
          subheader={
            <ListSubheader component="div">{this.titulo}</ListSubheader>
          }
        >
          {this.semestres.map((semestre) => (
            <ListItem button key={semestre}>
              <ListItemIcon></ListItemIcon>
              <ListItemText inset primary={semestre} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Semestres;
