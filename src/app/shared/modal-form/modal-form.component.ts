import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { WizardModel } from 'src/app/models/wizard';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  modalRef: BsModalRef;
  date: Date = new Date();
  fileToUpload: File = null;
  studentForm: FormGroup;
  imageUrl: string;
  @Output() studentSend: EventEmitter<WizardModel> = new EventEmitter<WizardModel>();

  constructor(
    private modalService: BsModalService,
    private fileService: FileService
  ) {
    this.imageUrl = '';
    this.studentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      date: new FormControl('', [Validators.required]),
      patronus: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      image: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-lg',
      backdrop: 'static'
    });
  }

  saveStudent(): void {
    const birthDate: Date = new Date(this.studentForm.get('date').value.split('-')[2]);
    const student: WizardModel = new WizardModel();
    student.name = this.studentForm.get('name').value;
    student.patronus = this.studentForm.get('patronus').value;
    student.age = (this.date.getFullYear() - birthDate.getFullYear() - 1).toString();
    student.image = this.imageUrl;
    this.studentSend.emit(student);
    this.modalRef.hide();
  }

  handleFileInput(file: FileList): void {
    this.fileToUpload = file.item(0);
    if (this.fileToUpload.type === 'image/jpeg' || this.fileToUpload.type === 'image/png') {
      this.fileService.uploadFile(this.fileToUpload).subscribe( resp => {
        this.imageUrl = resp;
        this.studentForm.get('image').setValue(resp);
      });
    }
  }
}
