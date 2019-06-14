import { Component, OnInit } from '@angular/core';
import { MemberService, IMember } from '../member.service';

@Component({
    selector: 'app-get',
    templateUrl: './get.component.html',
    styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

    public memberItems: IMember[] = []; 

    constructor(private MemberService: MemberService) { }

    ngOnInit() {
        this.MemberService
            .getItem()
            .subscribe(result => {
                this.memberItems = result;
            });
    }

    // เมื่อมีการกดปุ่มแก้ไขของแถวนั้นๆ
    onEditModul(item: IMember) {
        Object.assign(this.MemberService.updateModel, item);

        // แบบนี้มันยาวไป ให้ทำแบบข้างบน
        // this.MemberService.updateModel.mem_id = item.mem_id;
        // this.MemberService.updateModel.mem_name = item.mem_name;
        // this.MemberService.updateModel.mem_email = item.mem_email;
        // this.MemberService.updateModel.mem_address = item.mem_address;
        // this.MemberService.updateModel.mem_phone = item.mem_phone;
    }

    // เมื่อมีการกดปุ่มลบข้อมูลของแถวนั้น
    onDeleteModal(item: IMember){
        // console.log(item);
        Object.assign(this.MemberService.deleteModal, item);
    }

}
