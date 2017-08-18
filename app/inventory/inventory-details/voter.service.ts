/**
 * Created by coughlat on 03-May-17.
 */
import {Injectable} from '@angular/core'
import {IContract} from "../shared/inventory.model";

@Injectable()
export class VoterService{

    deleteVoter(contract:IContract, voterName: string){
        contract.voters = contract.voters.filter(voter => voter !== voterName)
    }

    addVoter(contract:IContract, voterName: string){
        contract.voters.push(voterName);
    }

    userHasVoted(contract:IContract, voterName: string){
        return contract.voters.some(voter => voter === voterName);
    }
}