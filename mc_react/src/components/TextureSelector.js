import {useEffect, useState,useCallback} from 'react';
import {useMemo,useTransition,useContext } from 'react';
import {Key1, Key2, Key3, Key4,Key5,Key6,Key7,Key8,Key9}
	from '../KV/Inventory';
import {Digit1,Digit2,Digit3,Digit4, Digit5
	,Digit6,Digit7,Digit8,Digit9}
	from '../KV/Slots';
export {Key1,Key2,Key3,Key4,Key5, Key6,Key7,Key8,Key9}
export {Digit1,Digit2,Digit3,Digit4, Digit5
	,Digit6,Digit7,Digit8,Digit9}
	import {Digit1Img,Digit2Img,Digit3Img,Digit4Img, Digit5Img
		,Digit6Img,Digit7Img,Digit8Img,Digit9Img}
		from '../KV/Slots';
	export {Digit1Img,Digit2Img,Digit3Img,Digit4Img, Digit5Img
		,Digit6Img,Digit7Img,Digit8Img,Digit9Img}
	import {Digit1Texture,Digit2Texture,Digit3Texture,Digit4Texture, 
		Digit5Texture,Digit6Texture,Digit7Texture,Digit8Texture,Digit9Texture}
from {Digit1Texture,Digit2Texture,Digit3Texture,Digit4Texture
		,Digit5Texture,Digit6Texture,Digit7Texture,Digit8Texture,Digit9Texture}			

export const TextureSelector = () => {
	    const [Visible, setVisible] = useState(false)
	    const [activateTexture, setTexture] = useTransition(()=>{Visible(pervState).else(setVisible)})

    useState (() => {
		const KV = {
			Key1: 'Digit1',
			Key2: 'Digit2',

		    Key3: 'Digit3',
			Key4: 'Digit4',
            Key5: 'Digit5',

			Key6: 'Digit6',
			Key7: 'Digit7',
			key8: 'Digit8',
			key9: 'Digit9'
		}
	})
		useEffect(() => {
			const textures = {
			       Key1, Key2, Key3,
				Key4, Key5,
				Key6, Key7,
				Key8, Key9
			}
			const pressedTexture = Object.entries(textures).find(([k, v]) => v)
			if (pressedTexture) {
			   setTexture(pressedTexture[0])
			}
		}, [activateTexture, Digit1, Digit2, Digit3, Digit4, Digit5,
			 Digit6, Digit7,
			 Digit8, Digit9])

		useCallback(() => {
			const visibilityTimeout = setTimeout(() => {
			  setVisible(false)
			}, 2000)
			Visible(true)
			return () => {
				clearTimeout(visibilityTimeout)
			}
		}, setTexture[activeTexture])
}
		useContext(()=>{ Visible &&  setVisible (
			<div className='absolute-centured-texture-selector'
			height ="16" width="16" key= {123456789} value = {123456789}>
				<div className =
				{Object.entries(images).map(k,Digit,Texture)}
					return ima
						k={key}
						Visible = {Digit2}
						activate={setTexture}
		             ges/>
		        </div>)
		})
		useMemo(()=> {
			<div>
				<images>
					{k}
						Digit,
						Texture
				</images>
			</div>
		})

