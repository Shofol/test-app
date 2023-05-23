import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostComponent } from './post/post.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    PostsComponent,
    PostComponent,
    AddCommentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
