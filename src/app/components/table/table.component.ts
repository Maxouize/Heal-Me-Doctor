import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Data {
  patientRecord: string;
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
      { name: 'BirthDate' },
      { name: 'Nom du patient' },
      { name: 'Nom de naissance' },
      { name: 'Prénom' },
      { name: 'Date de naissance' },
      { name: 'Dernier accès' },
      { name: '' }
    ];

    this.http.get<Data>('../../../assets/patientRecord.json')
      .subscribe((res) => {
        this.rows = res.patientRecord;
      });
  }

  ngOnInit() {}

  modifyPatientRecord(value) {
    alert('Dossier patient n° ' + value);
  }
}
