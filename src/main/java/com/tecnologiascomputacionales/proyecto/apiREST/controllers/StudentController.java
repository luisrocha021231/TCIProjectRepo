package com.tecnologiascomputacionales.proyecto.apiREST.controllers;

import com.tecnologiascomputacionales.proyecto.apiREST.entities.StudentEntity;
import com.tecnologiascomputacionales.proyecto.apiREST.repositories.StudentRepository;

import io.swagger.v3.oas.annotations.Operation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Period;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RequestMapping("/api/students")
@RestController
public class StudentController {

    @Autowired
    private StudentRepository contactRepository;

   @GetMapping
   @Operation(summary = "Obtener todos los estudiantes disponibles en la base de datos")
    public ResponseEntity<List<StudentEntity>> getAllContacts(){
        List<StudentEntity> exists = contactRepository.findAll();
        if(exists.isEmpty()){
            return ResponseEntity.noContent().build();
        }else{
            return ResponseEntity.ok(exists);
        }
    }

    @GetMapping("/{id}")
    @Operation(summary = "Obtener un estudiante mediante su id")
    public ResponseEntity<StudentEntity> getContactById(@PathVariable Long id){
       if(id <= 0){
           return ResponseEntity.badRequest().build();
       }
       Optional<StudentEntity> getcontact =  contactRepository.findById(id);

       if(getcontact.isPresent()){
           return ResponseEntity.ok(getcontact.get());
       }else{
           return ResponseEntity.notFound().build();
       }
    }

    @PostMapping
    @Operation(summary = "Crear un nuevo estudiante")
    public ResponseEntity<StudentEntity> createContact(@RequestBody StudentEntity contact ){

       if(contact.getId() != null){
           return ResponseEntity.badRequest().build();
       }

        LocalDate fechaNacimiento = LocalDate.parse(contact.getBirthdate());
        LocalDate fechaActual = LocalDate.now();
        int edad = calcularedad(fechaNacimiento, fechaActual);
        contact.setAge(edad);

       StudentEntity result = contactRepository.save(contact);
       return ResponseEntity.ok(result);

    }

    @PutMapping("/{id}")
    @Operation(summary = "Actualizar la informacion de un estudiante")
    public StudentEntity updateContact(@PathVariable Long id, @RequestBody StudentEntity form){
    

        StudentEntity contactFromDB = contactRepository.findById(id).orElse(null);
        contactFromDB.setName(form.getName());
        contactFromDB.setLastname(form.getLastname());
        contactFromDB.setBirthdate(form.getBirthdate());

        LocalDate fechaNacimiento = LocalDate.parse(form.getBirthdate());
        LocalDate fechaActual = LocalDate.now();
        int edad = calcularedad(fechaNacimiento, fechaActual);
        contactFromDB.setAge(edad);
        contactFromDB.setStatus(form.getStatus());

       return contactRepository.save(contactFromDB);
      
    }

    @DeleteMapping
    @Operation(summary = "Borrar todos los estudiantes alojados en la base de datos")
    public ResponseEntity<StudentEntity> deleteAllContacts(){
       contactRepository.deleteAll();
      return  ResponseEntity.noContent().build();
    }

    
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    @Operation(summary = "Eliminar a un estudiante mediante su id")
    public void deleteContactById(@PathVariable Long id){

        StudentEntity contactFromDB = contactRepository
        .findById(id)
        .orElse(null);

        contactRepository.delete(contactFromDB);
    }
    
    
    @GetMapping("/search")
    @Operation(summary = "Consulta personalizada, busca un estudiante mediante su nombre")
    public ResponseEntity<?> searchByName(@RequestParam String filtro ) {
        List<StudentEntity> users = contactRepository.searchNative(filtro);
        return ResponseEntity.ok(users);
    }

    public static int calcularedad(LocalDate fechaNacimiento, LocalDate fechaActual) {
        return Period.between(fechaNacimiento, fechaActual).getYears();
    }


}
