import React, { useState, useEffect } from 'react';
import ContentHeader from '../../Componentes/ContentHeader';
import Footer from '../../Componentes/Footer';
import Navbar from '../../Componentes/Navbar';
import SidebarContainer from '../../Componentes/SidebarContainer';
import { useNavigate, useParams } from 'react-router-dom';
import APIInvoke from '../../Val/APIInvoke';
import swal from 'sweetalert';


const EditarClientes = () => {
    const navigate = useNavigate();

    const { idclientes } = useParams();
    let res = idclientes.split('@');
    const ncliente = res[1];

    const [clientes, setClientes] = useState({

        nombres: ncliente,
        apellidos: ncliente,
        documento: ncliente,
        correo: ncliente,
        telefono: ncliente,
        direccion: ncliente

    });

    const { nombres, apellidos, documento, correo, telefono, direccion } = clientes;

    useEffect(() => {
        document.getElementById("nombres").focus();
    }, [])

    const onChange = (e) => {
        setClientes({
            ...clientes,
            [e.target.name]: e.target.value
        })
    }


    const addClientes = async () => {
        let res = idclientes.split('@');
        const idclientes = res[1];
    

    const data = {
        nombres: clientes.nombres,
        apellidos: clientes.apellidos,
        documento: clientes.documento,
        correo: clientes.correo,
        telefono: clientes.telefono,
        direccion: clientes.direccion
    }
        const response = await APIInvoke.invokePUT(`/api/clientes/${idclientes}`, data);
        const addclientes = response.clientes._id;

        if (addclientes !== idclientes) {
            const msg = "El cliente no fue modificado con exito";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            navigate("/clientes");
            const msg = "El cliente fue modificado con exito";
            swal({
                title: 'Informacion',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
    }

    }

    const onSubmit = (e) => {
        e.preventDefault();
        addClientes();
    }


    return (
        <div>EditarClientes</div>
    )
}

export default EditarClientes
