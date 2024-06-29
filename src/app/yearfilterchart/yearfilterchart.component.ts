import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompanyService } from '../Services/company.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-yearfilterchart',
  templateUrl: './yearfilterchart.component.html',
  styleUrls: ['./yearfilterchart.component.css']
})
export class YearfilterchartComponent implements OnInit, OnDestroy {

  data: any;
  dataByRegion: any;
  uniqueYears: any;
  dataAfterYearFilter: any;
  

  regionLbel: string[] = [];
  intensityData: number[] = [];
  relevanceData: number[] = [];
  likelihoodData: number[] = [];
  lineChart: Chart | null = null;
 
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getRecords().subscribe(
      (resp) => {
        this.data = resp;
        this.uniqueYears = this.getUniqueYears(this.data);
        console.log(this.uniqueYears);
      }
    );

    this.companyService.getDataByRegion().subscribe(
      (resp) => {
        console.log(resp);
        this.dataByRegion = resp;
        this.processRegionData();
        this.showLineChart();
      },
      (err) => {
        console.log(err);
      }
    );

 }

  private getUniqueYears(data: any[]): string[] {
    const yearsSet = new Set<string>();
    data.forEach((item) => {
      if (item.end_year) {
        yearsSet.add(item.end_year);
      }
    });
    return Array.from(yearsSet);
  }

  onFilterChange(event: any): void {
    this.clearChartData();
    
    const filterValue = event.target.value;
    console.warn('value of filter is ', filterValue);

    if (filterValue === 'all') {
      this.processRegionData();
      this.showLineChart();
    } else {
      this.companyService.getDataByFilter("end_year",filterValue).subscribe(
        (resp) => {
          console.log(resp);
          this.dataAfterYearFilter = resp;
          this.processFilteredData();
          this.showLineChart();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  private processRegionData(): void {
    this.regionLbel = [];
    this.intensityData = [];
    this.relevanceData = [];
    this.likelihoodData = [];

     this.dataByRegion.forEach((item: any) => {
      if (item[0] !== "") {
        this.regionLbel.push(item[0]);
        this.intensityData.push(item[1]);
        this.relevanceData.push(item[2]);
        this.likelihoodData.push(item[3]);
      
      }
    });
 }

  private processFilteredData(): void {
    this.regionLbel = [];
    this.intensityData = [];
    this.relevanceData = [];
    this.likelihoodData = [];

    this.dataAfterYearFilter.forEach((item: any) => {
      if (item[0] !== "") {
        this.regionLbel.push(item[0]);
        this.intensityData.push(item[1]);
        this.relevanceData.push(item[2]);
        this.likelihoodData.push(item[3]);
      }
   

     
    });
  }

  private clearChartData(): void {
    if (this.lineChart) {
      this.lineChart.destroy();
      this.lineChart = null;
    }
  }

  showLineChart(): void {
    this.clearChartData();

    const ctx = document.getElementById('lineChart') as HTMLCanvasElement;

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.regionLbel,
        datasets: [
          {
            label: 'Intensity',
            data: this.intensityData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Relevance',
            data: this.relevanceData,
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
          },
          {
            label: 'Likelihood',
            data: this.likelihoodData,
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.clearChartData();
  }
}
