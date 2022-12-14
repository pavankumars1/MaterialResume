import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

const matComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
];
@NgModule({
  imports: [CommonModule, matComponents],
  exports: [matComponents],
  declarations: [],
})
export class MaterialModule {}
