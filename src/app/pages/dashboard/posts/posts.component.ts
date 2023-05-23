import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService, Post } from '../dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  dataSource = new MatTableDataSource(this.posts);

  constructor(private dashboardService: DashboardService) {}
  displayedColumns: string[] = ['title', 'body'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dashboardService.fetchPosts().subscribe((res: any) => {
      console.log(res);
      this.posts = res;
      this.dataSource.data = this.posts;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
