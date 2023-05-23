import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentGuard } from 'src/app/guards/commentguard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,

    children: [
      { path: '', component: PostsComponent },
      {
        path: 'posts/:id',
        component: PostComponent,
      },
      {
        path: 'posts/:id/addComment',
        component: AddCommentComponent,
        canActivate: [CommentGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
