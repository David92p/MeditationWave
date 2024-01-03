import { useEffect, useState } from 'react'

type CountDownType = {hours: number, minutes: number, seconds: number}

const useCountdown = (timer:CountDownType) => {

    const [countDown, setCountDown] = useState<CountDownType>(timer)

	useEffect(() => {
		const customInteval = setInterval(() => {
			setCountDown((prevCountDown:CountDownType)=> {
				const { hours, minutes, seconds } = prevCountDown
				if (seconds > 0){
					return {...prevCountDown, seconds: prevCountDown.seconds - 1}
				}
				else if (minutes > 0){
					return {...prevCountDown, minutes: prevCountDown.minutes - 1, seconds: 59}
				}
				else if ( hours > 0) {
					return {...prevCountDown, hours: prevCountDown.hours - 1,  minutes:59, seconds: 59}
				}
				else {
					return prevCountDown
				}
			})
		}, 1000)

		return () => clearInterval(customInteval)
	}, [countDown])

	return countDown
}

export default useCountdown
