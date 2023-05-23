import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DashboardService, Post } from '../dashboard.service';
import { Observable, forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  result$!: Observable<any>;
  newComments: any[] = [];

  ngOnInit() {
    this.result$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.dashboardService.getComments().subscribe((res) => {
          this.newComments = res.filter(
            (comment) => comment.postId === params.get('id')!
          );
          console.log(this.newComments);
        });

        return forkJoin({
          post: this.dashboardService.fetchPost(params.get('id')!),
          comments: this.dashboardService.fetchComments(params.get('id')!),
        });
      })
    );
  }
}
