package com.tecnologiascomputacionales.proyecto.apiREST.repositories;

import com.tecnologiascomputacionales.proyecto.apiREST.entities.StudentEntity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<StudentEntity, Long> {
      
    @Query(
    value = "SELECT * FROM students WHERE students.name LIKE %:filtro% OR students.lastname LIKE %:filtro%",
    nativeQuery = true
    )
    List<StudentEntity> searchNative(@Param("filtro") String filtro);
}


