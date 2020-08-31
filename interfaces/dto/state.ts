import { UserInterface } from './user'
import { WorkInterface } from './works'

export interface StateInterface {
  userState: UserInterface
  workState?: WorkInterface
}
