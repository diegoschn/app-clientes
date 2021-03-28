package com.diegoschneider.clientes.service;

import com.diegoschneider.clientes.model.entity.Cliente;
import com.diegoschneider.clientes.repository.ClientesRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@Service
public class ClienteService {

    private final ClientesRepository clientesRepository;

    public ClienteService(ClientesRepository clientesRepository) {
        this.clientesRepository = clientesRepository;
    }

    public List<Cliente> listar(){
        return clientesRepository.findAll();
    }

    @Transactional
    public Cliente salvar(Cliente cliente){
        cliente.setDataCadastro(LocalDate.now());
        return clientesRepository.save(cliente);
    }

    public Cliente buscar(Integer id){
        return clientesRepository
                .findById(id)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }


    public void excluir(Integer id) {
        clientesRepository
                .findById(id)
                .map( cliente -> {
                    clientesRepository.delete(cliente);
                    return Void.TYPE;
                })
                .orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));
    }

}
