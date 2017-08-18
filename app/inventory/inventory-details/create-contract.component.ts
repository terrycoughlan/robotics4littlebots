/**
 * Created by coughlat on 26-Apr-17.
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {IContract} from '../shared/index'

@Component({
    selector: 'create-contract',
    templateUrl: 'app/inventory/inventory-details/create-contract.component.html',
    styles: [`
        em {float:right; color: #e05c65; padding-left: 10px}
        .error input, .error select, .error textarea {background-color: #e3c3c5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :-ms-input-placeholder {color: #999;}
    `]
})

export class CreateContractComponent implements OnInit{
    @Output() saveNewContract = new EventEmitter()
    @Output() cancelAddContract = new EventEmitter()
    newContractForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

        this.newContractForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveContract(formValues){
        let contract:IContract = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewContract.emit(contract)
    }

    cancel(){
        this.cancelAddContract.emit()
    }
}