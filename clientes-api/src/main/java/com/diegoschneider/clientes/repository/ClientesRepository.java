package com.diegoschneider.clientes.repository;

import com.diegoschneider.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientesRepository extends JpaRepository<Cliente, Integer> {



}
