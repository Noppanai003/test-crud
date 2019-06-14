import { Component, OnInit, Input } from '@angular/core';
import { MemberService, IMember } from '../member.service';
import { GetComponent } from '../get/get.component';

declare const $: any;

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  @Input('getComp') getComp: GetComponent;

  // สร้าง model เอาไว้เก็บค่าที่อยู่ใน Input
  public model: IMember;

  constructor(private memberService: MemberService) {
    this.model = this.memberService.updateModel;
  }

  ngOnInit() {
  }

  // บันทึกข้อมูล
  public onSubmit() {
    // console.log(this.model);
    this.memberService
      .putItem(this.model.mem_id, this.model)
      .subscribe(
        result => {
          // console.log(result);
          this.getComp.ngOnInit();
          $('#editEmployeeModal').modal('hide');
        },
        excep => alert(excep.error.message)
      );
  }

}
