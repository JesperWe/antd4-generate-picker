import React from 'react'
import { ConfigProvider } from 'antd'
import svSE from 'antd/lib/locale/sv_SE'
import dayjs from 'dayjs'
import 'dayjs/locale/sv'
import { DatePicker, Calendar } from './components'
import './App.css'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker

dayjs.locale( 'sv' )

function App() {
	function onChange( date, dateString ) {
		console.log( date, dateString )
	}

	function onPanelChange( value, mode ) {
		console.log( value, mode )
	}

	return (
		<ConfigProvider locale={svSE}>
			<div className="App">
				<div>
					<DatePicker onChange={onChange}/>
					<br/>
					<MonthPicker onChange={onChange}/>
					<br/>
					<RangePicker onChange={onChange}/>
					<br/>
					<WeekPicker onChange={onChange}/>
				</div>
				<Calendar onPanelChange={onPanelChange}/>
			</div>
		</ConfigProvider>
	)
}

export default App
