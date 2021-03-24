package com.diegoschneider.clientes;

import com.diegoschneider.clientes.model.entity.Cliente;
import com.diegoschneider.clientes.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
@Profile(value = "development")
public class ClienteApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClienteApplication.class);
    }

    @Bean
    public CommandLineRunner run(@Autowired ClientesRepository clientesRepository){
        return args -> {
            Cliente cliente = Cliente.builder().cpf("11111111111").nome("Fulano").build();
            clientesRepository.save(cliente);
        };
    }
}
