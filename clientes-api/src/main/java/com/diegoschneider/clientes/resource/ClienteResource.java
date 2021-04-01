package com.diegoschneider.clientes.resource;

import com.diegoschneider.clientes.model.entity.Cliente;
import com.diegoschneider.clientes.model.entity.exception.EntidadeEmUsoException;
import com.diegoschneider.clientes.model.entity.exception.EntidadeNaoEncontradaException;
import com.diegoschneider.clientes.repository.ClientesRepository;
import com.diegoschneider.clientes.service.ClienteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clientes")
@CrossOrigin("http://localhost:4200")
public class ClienteResource {

    private final ClientesRepository clientesRepository;
    private final ClienteService clienteService;


    public ClienteResource(ClientesRepository clientesRepository, ClienteService clienteService){
        this.clientesRepository = clientesRepository;
        this.clienteService = clienteService;
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> findAll(){
        return ResponseEntity.ok(clienteService.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscar(@PathVariable Integer id){
        Optional<Cliente> clienteEncontrado = clientesRepository.findById(id);
        if(clienteEncontrado.isPresent()){
            return ResponseEntity.ok(clienteEncontrado.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Cliente> create(@Valid @RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(clientesRepository
                .save(clienteService.salvar(cliente)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> update(@PathVariable Integer id, @RequestBody
            Cliente cliente) {
        Optional<Cliente> cozinhaEncontrada = clientesRepository.findById(id);
        if (cozinhaEncontrada.isPresent()) {
            cliente.setId(id);
            Cliente clienteOk = clienteService.salvar(cliente);
            return ResponseEntity.ok(clienteOk);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Integer id) {
        try {
            clienteService.excluir(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }catch(EntidadeNaoEncontradaException e){
            return ResponseEntity.notFound().build();
        }catch (EntidadeEmUsoException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}
