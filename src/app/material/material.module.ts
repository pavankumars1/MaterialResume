import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

const matComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatIconModule
];
@NgModule({
  imports: [CommonModule, matComponents],
  exports: [matComponents],
  declarations: [],
})
export class MaterialModule {}
