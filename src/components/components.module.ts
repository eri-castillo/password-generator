import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PasswordFormComponent } from "./password-form/password-form.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from "@angular/forms";
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    PasswordFormComponent,
    TopNavComponent
  ],
  providers: [],
  exports: [
    PasswordFormComponent,
    TopNavComponent
  ]
}) export class ComponentsModule { }