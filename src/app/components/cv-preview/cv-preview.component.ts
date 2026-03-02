import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-preview.component.html',
  styleUrls: ['./cv-preview.component.css']
})
export class CvPreviewComponent implements OnInit {

  cv: any = {
    experience: [],
    education: [],
    skills: []
  };

  constructor(private route: ActivatedRoute, private cvService: CvService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.cvService.getUserById(id).subscribe(data => {
      console.log("API RESPONSE:", data);

      // Ensure arrays are never null
      this.cv = {
        ...data,
        experience: data.experience || [],
        education: data.education || [],
        skills: data.skills || []
      };
    });
  }

  print() {
    window.print();
  }
}