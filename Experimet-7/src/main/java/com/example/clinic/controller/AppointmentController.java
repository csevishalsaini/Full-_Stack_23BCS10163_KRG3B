
package com.example.clinic.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.clinic.model.Appointment;
import com.example.clinic.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    @PostMapping("/book")
    public Appointment book(@RequestBody Appointment appointment){
        return service.bookAppointment(appointment);
    }

    @GetMapping
    public List<Appointment> all(){
        return service.getAllAppointments();
    }
}
