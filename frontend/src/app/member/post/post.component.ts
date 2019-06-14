import { Component, OnInit, Input } from '@angular/core';
import { MemberService, IMember } from '../member.service';
import { GetComponent } from '../get/get.component';

declare const $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('getComp') getComp: GetComponent; // ทำให้รีโหลดแบบ jqury

  // สร้าง model เอาไว้เก็บค่าที่อยู่ใน Input
  public model: IMember = {
    mem_name: '',
    mem_email: '',
    mem_address: '',
    mem_phone: ''
  };

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  // การบันทึกข้อมูลด้วย Method Post
  //  ส่งข้อมูลไปบันทึกที่ Back-end
  public onSubmit() {
    this.memberService
      .postItem(this.model)
      .subscribe(
        result => {
          this.onResetModul();
          this.getComp.ngOnInit();
          $('#addEmployeeModal').modal('hide'); //ตัวปิด Modal
        },
        excep => alert(excep.error.message)
      );
  }

  // เคลียร์ค่าฟอร์ม
  public onResetModul() {
    this.model = {
      mem_name: '',
      mem_email: '',
      mem_address: '',
      mem_phone: ''
    };
  }
}
