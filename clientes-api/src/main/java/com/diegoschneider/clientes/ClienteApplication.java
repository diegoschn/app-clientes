package com.diegoschneider.clientes;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
@Profile(value = "development")
public class ClienteApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClienteApplication.class);
    }

//    @Bean
//    public CommandLineRunner run(@Autowired ClientesRepository clientesRepository){
//        return args -> {
//            Cliente cliente = Cliente.builder().cpf("11111111111").nome("Fulano").build();
//            clientesRepository.save(cliente);
//        };
//    }
}
