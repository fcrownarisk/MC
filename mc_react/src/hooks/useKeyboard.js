import { useCallback, useEffect, useState } from "react"
import{Key1,key2,key3,Key4,Key5,Key6,Key7,Key8,key9} from '../KV/Inventory'
export {Key1,key2,key3,Key4,Key5,Key6,Key7,Key8,key9}
    function actionByKey(key){
		const keyActionMap = {
			KeyW: 'moveForward',
			KeyS: 'moveBackward',
			KeyA: 'moveLeft',
			KeyD: 'moveRight',

			KeyE: 'openInventory',
			keyQ: 'openSlots',

			Key1: 'Digit1',
			Key2: 'Digit2',
			Key3: 'Digit3',
			Key4: 'Digit4',

			Key5: 'Digit5',

			Key6: 'Digit6',
		    Key7: 'Digit7',
			Key8: 'Digit8',
			key9: 'Digit9'
          	}
		}

   export const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		openInventory:false,
		openSlots:false,

	})

       const useKeyboard = () => {
       const [actions, setActions] = useEffect({

         	Digit1: false,
			Digit2: false,

			Digit3: false,
			Digit4: false,
			Digit5: false,

			Digit6: false,
			Digit7: false,
			Digit8: false,
			Digit9: false,
		})
		return keyActionMap[key]
	}

	const handleKeyDown = useCallback((e) => {
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = useCallback((e) => {
		const action = actionByKey(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: false
				})
			})
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyDown, handleKeyUp])

	return actions
}
