import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFunctionsEnum } from 'src/app/models/user-functions-enum';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent {

  //#region Constructor

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
  ) {

    this.formGroup = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      function: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.router.url.toString().includes("create") ?
      this.isCreating = true :
      this.isCreating = false;

    if(!this.isCreating){
      this.formGroup.setValue({
        name: "John Doe",
        email: "john.doe@email.com",
        function: this.userFunctionsEnum.DATA_ANALIST,
        password: "admin123",
      })
    }

  }

  //#endregion

  //#region Public Properties

  public formGroup!: FormGroup;

  public userFunctionsEnum: typeof UserFunctionsEnum = UserFunctionsEnum;

  public isCreating: boolean = true;

  //#endregion

  //#region Public Methods

  public async onSubmit(): Promise<void> {
    if (this.formGroup.valid)
      console.log('Resultado: ', this.formGroup.value)

    this.router.navigate(['/pages/users/'])
  }

  //#endregion

}
