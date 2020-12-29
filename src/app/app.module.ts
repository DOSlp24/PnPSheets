import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SheetViewComponent } from './sheet-view/sheet-view.component';
import { SheetMakerComponent } from './sheet-maker/sheet-maker.component';
import { AppRouting } from './app.routing';
import { PersInformationComponent } from './pnp-form/pers-information/pers-information.component';
import { CharPictureComponent } from './pnp-form/char-picture/char-picture.component';
import { MoneyComponent } from './pnp-form/money/money.component';
import { SkillsComponent } from './pnp-form/skills/skills.component';
import { CombatComponent } from './pnp-form/combat/combat.component';
import { StateComponent } from './pnp-form/state/state.component';
import { InventoryComponent } from './pnp-form/inventory/inventory.component';
import { AttributeComponent } from './pnp-form/attribute/attribute.component';
import { BackgroundComponent } from './pnp-form/background/background.component';
import { DatePipe } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SheetViewComponent,
    SheetMakerComponent,
    PersInformationComponent,
    CharPictureComponent,
    MoneyComponent,
    SkillsComponent,
    CombatComponent,
    StateComponent,
    InventoryComponent,
    BackgroundComponent,
    AttributeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpClientModule,
    FlexLayoutModule,
    FileUploadModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  exports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    FileUploadModule,
    HttpClientModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
