
package com.example.clinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.clinic.model.Appointment;
import com.example.clinic.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repo;

    public Appointment bookAppointment(Appointment appointment){
        return repo.save(appointment);
    }

    public List<Appointment> getAllAppointments(){
        return repo.findAll();
    }
}
