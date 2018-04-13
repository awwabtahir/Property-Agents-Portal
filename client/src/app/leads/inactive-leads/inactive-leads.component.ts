import { DataTableDirective } from 'angular-datatables';
import { LeadService } from './../../lead.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inactive-leads',
  templateUrl: './inactive-leads.component.html',
  styleUrls: ['./inactive-leads.component.css']
})
export class InactiveLeadsComponent implements OnInit, AfterViewInit {

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  dtOptions: any = {};

  constructor(private auth: AuthenticationService, private router: Router,
    private leadService: LeadService) { }

  ngOnInit() {
    this.getLeads();
  }

  ngAfterViewInit(): void {

    setTimeout(() => {

      this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.columns().every(function () {
          const that = this;
          $('#leadInput21', this.footer()).on('keyup change', function () {
            if (that.search() !== this['value']) {
              that
                .search(this['value'])
                .draw();
            }
          });
        });
        $('#datatableId tfoot tr').appendTo('#datatableId thead');
      });

    }, 3000);


  }

  // For getting leads

  rawleads;
  leads;
  resultLeads;

  getLeads() {
    this.auth.getLeads().subscribe(leads => {

      this.rawleads = leads;

      this.leads = this.rawleads.filter(function (rawleads) {
        return rawleads.leadAdminStatus == 0;
      });

      this.resultLeads = this.leads;

    }, (err) => {
      console.error(err);
    });
  }

}
