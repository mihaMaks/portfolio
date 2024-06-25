import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'cv',
        component: ResumeComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    }
]
@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)

export class AppRoutesModule {

}