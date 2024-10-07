import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent {
  appointments = [
    { 
      date: new Date(2023, 5, 15), 
      time: '10:00 AM', 
      type: 'Checkup', 
      doctor: 'Dr. Smith'
    },
    { 
      date: new Date(2023, 5, 20), 
      time: '2:00 PM', 
      type: 'Vaccination', 
      doctor: 'Dr. Johnson'
    },
    { 
      date: new Date(2023, 5, 25), 
      time: '11:30 AM', 
      type: 'Grooming', 
      doctor: 'Dr. Williams'
    },
  ];
}