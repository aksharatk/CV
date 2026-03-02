import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CvService } from '../../services/cv.service';

@Component({
  selector: 'app-cv-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cv-form.component.html',
    styleUrls: ['./cv-form.component.css']   // 👈 add this

})
export class CvFormComponent {

  @Output() close = new EventEmitter<void>();

  cvForm: FormGroup;

  constructor(private fb: FormBuilder, private cvService: CvService) {
    this.cvForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      summary: [''],
      experience: this.fb.array([]),
      education: this.fb.array([]),
      skills: this.fb.array([])
    });
  }

  get experience() { return this.cvForm.get('experience') as FormArray; }
  get education() { return this.cvForm.get('education') as FormArray; }
  get skills() { return this.cvForm.get('skills') as FormArray; }

  addExperience() {
    this.experience.push(this.fb.group({
      company: [''],
      role: [''],
      start_date: [''],
      end_date: [''],
      description: ['']
    }));
  }

  addEducation() {
    this.education.push(this.fb.group({
      institution: [''],
      degree: [''],
      start_date: [''],
      end_date: ['']
    }));
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  onSubmit() {
    if (this.cvForm.valid) {
      this.cvService.addCV(this.cvForm.value).subscribe(() => {
        alert("CV Saved Successfully");
        this.close.emit();   // close modal
      });
    }
  }
}