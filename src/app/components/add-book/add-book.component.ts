import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'add-book.component.html',
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // TODO 6 : Créer un formulaire avec les champs suivants : title, author, description, category
    // TODO 7 : Ajouter les validations nécessaires

    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe({
        next: () => {
          this.router.navigate(['/books']);
        },
        error: (err: any) => {
          console.error("Erreur lors de l'ajout du livre", err);
        },
      });
    }
  }
}
