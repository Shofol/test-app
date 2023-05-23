import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';
import { Comment } from '../dashboard.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddCommentComponent {
  postId: string;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  commentForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    body: new FormControl(''),
  });

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.postId = res['id'];
    });
  }

  addComment() {
    let newComment: Comment = {
      postId: '',
      id: '',
      name: '',
      email: '',
      body: '',
    };
    newComment.postId = this.postId;
    newComment.name = this.commentForm.controls.name.value || '';
    newComment.email = this.commentForm.controls.email.value || '';
    newComment.body = this.commentForm.controls.body.value || '';

    this.dashboardService
      .addComment(this.postId, newComment)
      .subscribe((res: any) => {
        this.dashboardService.addNewComment(res).subscribe((result) => {
          console.log(result);
          this.router.navigate([`/dashboard/posts/${this.postId}`]);
        });
      });
  }
}
