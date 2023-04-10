import { FinishedWorkState } from './finishedWorksState';
import { FreelancersState } from './freelancerState';
import { HiredFreelancerState } from './hiredFreelancerState';
import { OngoingWorkState } from './ongoingWorksState';
import { RequiredWorksState } from './requiredWorksState';
import { UserState } from './userState';
import { WorkState } from './workState';

export interface IState {
  user: UserState;
  works: WorkState;
  freelancers: FreelancersState;
  requiredWorks: RequiredWorksState;
  ongoingWorks: OngoingWorkState;
  finishedWorks: FinishedWorkState;
  hiredFreelancers: HiredFreelancerState;
}
