import { IntroductionComponent } from "app/feature/home/components/introduction/introduction.component";

export const routes = [
    { 'path': '', redirect: 'home', component: IntroductionComponent },
    { 'path': 'inicio', component: IntroductionComponent },
    { 'path': 'experience', loadChildren: 'app/feature/experience/experience.module#ExperienceModule' },
    { 'path': 'technology', loadChildren: 'app/feature/technology/technology.module#TechnologyModule' }
  ];