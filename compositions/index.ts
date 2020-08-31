import { reactive, toRefs, InjectionKey } from '@vue/composition-api'
import { StateInterface, UserInterface } from '~/interfaces'
export const useGlobalState = () => {
  const globalState = reactive<StateInterface>({
    userState: {
      id: '',
      name: '',
      email: '',
      emailVerified: false,
      photoUrl: '',
    },
  })

  const setUserState = (stateValue: UserInterface) => {
    globalState.userState = stateValue
  }

  return {
    ...toRefs(globalState),
    setUserState,
  }
}
export type GlobalStateType = ReturnType<typeof useGlobalState>
export const GlobalStateKey: InjectionKey<GlobalStateType> = Symbol(
  'GlobalState'
)
