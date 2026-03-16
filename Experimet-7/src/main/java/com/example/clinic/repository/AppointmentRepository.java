
package com.example.clinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.clinic.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
}
