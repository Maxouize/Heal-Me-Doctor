import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  movies: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  public data: Data;
  public columns: any;
  public rows: any;

  constructor(private http: HttpClient) {
    this.columns = [
      { name: 'Name' },
      { name: 'Company' },
      { name: 'Genre' }
    ];

    this.http.get<Data>('../../../assets/planning.json')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.movies;
      });
  }

  ngOnInit() {}

}
