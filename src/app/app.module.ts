import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AddPersonComponent } from "./add-person/add-person.component";
import { HomeComponent } from "./home/home.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, NavComponent, AddPersonComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
