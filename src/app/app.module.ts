import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CajeraComponent } from './components/cajera/cajera.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import { BootstrapService } from './services/bootstrap.service';
import { CarteraComponent } from './components/cajera/cartera/cartera.component';
import { LoginComponent } from './pages/login/login.component';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { MesasComponent } from './components/mesas/mesas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CajeraComponent,
    NavbarComponent,
    ModalComponent,
    CarteraComponent,
    LoginComponent,
    MesasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
