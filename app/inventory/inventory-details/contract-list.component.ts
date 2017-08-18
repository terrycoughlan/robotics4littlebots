/**
 * Created by coughlat on 27-Apr-17.
 */
import {Component, Input, OnChanges} from '@angular/core'
import {IContract} from "../shared/index";
import {AuthService} from '../../user/auth.service'
import {VoterService} from './voter.service'

@Component({
    selector: 'contract-list',
    templateUrl: 'app/inventory/inventory-details/contract-list.component.html'
})
export class ContractListComponent implements OnChanges{
    @Input() contracts:IContract[];
    @Input() filterBy:string;
    @Input() sortBy:string;
    visibleContracts: IContract[] = [];

    constructor(private auth: AuthService, private voterService: VoterService){

    }

    ngOnChanges(){
        if(this.contracts){
            this.filterContracts(this.filterBy)
            this.sortBy === 'name' ? this.visibleContracts.sort(sortByNameAsc) : this.visibleContracts.sort(sortByVotesDesc);
        }
    }

    toggleVote(contract: IContract ){
        if(this.userHasVoted(contract)){
            this.voterService.deleteVoter(contract, this.auth.currentUser.userName);
        }else{
            this.voterService.addVoter(contract, this.auth.currentUser.userName);
        }
        if(this.sortBy === 'votes'){
            this.visibleContracts.sort(sortByVotesDesc);
        }
    }

    userHasVoted(contract: IContract){
        return this.voterService.userHasVoted(contract, this.auth.currentUser.userName);
    }

    filterContracts(filter){
        if(filter === 'all'){
            this.visibleContracts = this.contracts.slice(0) //clones the exact replica of Contracts array so we can filter
        }else{
            this.visibleContracts = this.contracts.filter(contract => {
                return contract.level.toLocaleLowerCase() === filter
            })

        }
    }
}

function sortByNameAsc(c1: IContract, c2: IContract){
    if (c1.name > c2.name) return 1
    else if(c1.name === c2.name) return 0
    else return -1
}

function sortByVotesDesc(c1: IContract, c2: IContract){
    return c2.voters.length - c1.voters.length;
}