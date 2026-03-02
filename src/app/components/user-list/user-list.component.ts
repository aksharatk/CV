import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']   // 👈 add this
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  page = 1;

  showModal = false;
  selectedUser: any = {};

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.cvService.getUsers(this.page).subscribe(data => {
      this.users = data;
    });
  }

  nextPage() {
    this.page++;
    this.loadUsers();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadUsers();
    }
  }

  openEdit(user: any) {
    this.selectedUser = { ...user }; // clone object
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  updateUser() {
    this.cvService.updateUser(this.selectedUser.id, this.selectedUser)
      .subscribe(() => {
        this.showModal = false;
        this.loadUsers();
      });
  }
}