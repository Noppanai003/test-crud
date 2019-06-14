import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';
import { GetComponent } from '../get/get.component';

declare const $ : any ;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input('getComp') getComp: GetComponent;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }


  // ส่งข้อมูลไปลบข้อมูลที่ Backend 
  public onSubmit() {
    // console.log(this.memberService.deleteModal);
    this.memberService
      .deleteItem(this.memberService.deleteModal.mem_id)
      .subscribe(
        result => {
          // console.log(result);
          this.getComp.ngOnInit();
          $('#deleteEmployeeModal').modal('hide');
        },
        excep => alert(excep.error.message)
      );
  }
}
