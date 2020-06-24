import React, { Component } from 'react';
import axios from 'axios';
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

class Materias extends Component {
  //  state = {  }
  titulo = 'LISTA DE MATERIAS';
  materias = [
    'PROGRAMACION',
    'BASE DE DATOS',
    'REDES',
    'CALCULO',
    'TALLER DE INVESTIGACION',
    'SISTEMAS OPERATIVOS',
    'DISPOSITIVOS MOVILES',
    'TALLER DE ETICA',
    'INLGES',
  ];

  frmIdMateria = React.createRef();
  frmNombreMat = React.createRef();

  addMateria = (event) => {
    console.log('Agregar materia');
    event.preventDefault();
    console.log('Console mensaje');
    console.log(this.frmIdMateria.value);
    console.log(this.frmNombreMat.value);
    this.alumnos.push(this.frmNombreMat.value);
  };

  render() {
    return (
      <div className="App-materias">
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
        <form autoComplete="off" onSubmit={this.addMateria}>
          <TextField
            label="IdMateria"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmIdMateria = e)}
          />
          &nbsp;&nbsp;
          <TextField
            label="Nombre"
            type="text"
            margin="normal"
            variant="outlined"
            inputRef={(e) => (this.frmNombreMat = e)}
          />
          <Fab
            color="primary"
            size="medium"
            //className="dish-form-icon"
            onClick={this.addMateria}
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
          {this.materias.map((materia) => (
            <ListItem button key={materia}>
              <ListItemIcon></ListItemIcon>
              <ListItemText inset primary={materia} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default Materias;
