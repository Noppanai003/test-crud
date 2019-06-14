import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private backendURL: string = 'http://localhost:9000/api/member';
  public updateModel: IMember = Object.assign({});
  public deleteModal: IMember = Object.assign({});

  constructor(private httpClient: HttpClient) { }

  // ดึงข้อมูล Member ทั้งหมด
  getItem() {
    return this.httpClient.get<IMember[]>(this.backendURL);
  }

  // บันทึกข้อมูล Member 
  postItem(Value: IMember) { //ต้องรับพารามิเตอร์ที่จะทำการเอาข้อมูลไปใส่ในฐานข้อมูล คือค่าเมดธอดล่าง
    return this.httpClient.post(this.backendURL, Value);
  }

  // แก้ไขข้อมูล Member
  putItem(id: any, value: IMember) { // ต้องใช้สองค่าในการเช็ค คือไอดีเพื่อตรวจสอบว่าเราไปใช้เรคคอร์ดไหน สองคือ value ข้อมูลชุดใหม่ที่จะเข้ามาแทนที่ชุดเดิม 
    // value.mem_email =''; เช็คว่าตัวกัน error ใช่ได้มั้ย
    return this.httpClient.put(this.backendURL, value, { params: { id } });
  }

  // ลบข้อมูล Member
  deleteItem(id: any) {
    return this.httpClient.delete(this.backendURL, { params: { id } });
  }
}

export interface IMember {
  mem_id?: string;
  mem_name: string;
  mem_email: string;
  mem_address?: any;
  mem_phone: string;
  mem_created?: string;
  mem_updated?: string;
}
