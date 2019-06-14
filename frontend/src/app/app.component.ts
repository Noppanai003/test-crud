import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        this.initializeLoadScript();
    }

    // โหลด bootstrap jquery script
    private initializeLoadScript() {
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Select/Deselect checkboxes
        var checkbox = $('table tbody input[type="checkbox"]');
        $("#selectAll").click(function () {
            if (this.checked) {
                checkbox.each(function () {
                    this.checked = true;
                });
            } else {
                checkbox.each(function () {
                    this.checked = false;
                });
            }
        });

        checkbox.click(function () {
            if (!this.checked) {
                $("#selectAll").prop("checked", false);
            }
        });
    }

}

    //อดีตเคยศึกษา
// export class AppComponent {
//     title = 'frontend';
//     backendURL = 'http://localhost:9000/api/member';

//     constructor(private httpClient: HttpClient) {
//         this.initialzeLoadData();
//     }

//     // โหลดข้อมูลเข้ามาครั้งแรก
//     private initialzeLoadData() {

//         this.httpClient
//             .post(this.backendURL + '?id=200', {message: 'Create Method from Front-end'}) // เราจะทำการ Get ค่า ?id=200 เป็นการส่งคิวรี่พาราม คือส่งค่าไอดีไปด้วยแล้วไปเปลี่ยนที่ฝั่ง php
//             .subscribe(result => {
//                 console.log(result);

//             });
//     }
// }
