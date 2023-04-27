import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private toast:ToastService) { 
    this.form = this.fb.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
    });
  }

  ngOnInit(): void {
  }

  altaActor() {
    console.log(this.form.status)
    if (this.form.status == "VALID") {
      
     
    } else {
      this.toast.show("Completa el campo", { classname: 'bg-danger', "delay": "2000" });
    }
  }

}
