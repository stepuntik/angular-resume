import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectCardComponent } from './portfolio/project-card/project-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkCardComponent } from './work/work-card/work-card.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    SkillCardComponent,
    PortfolioComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent,
    ProjectCardComponent,
    WorkCardComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
