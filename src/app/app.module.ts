import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';

import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
