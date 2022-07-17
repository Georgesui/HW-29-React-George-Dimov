import React, {useState} from 'react';

const WorkersTable = (props) => {
	const [allWorkingDays, setWorkingDays] = useState(props.worker.workingDays);
	const [salaryPerDay, setsalaryPerDay] = useState(props.worker.salary)
	const [totalSalary, setTotalSalary] = useState(()=>props.worker.workingDays*props.worker.salary)
	
		return(
		<tr key={props.worker.id}>
				<td>{props.worker.fullName}</td>
				<td className='salaryClass'><input type="number" value={salaryPerDay} onChange={(e)=>{
					setsalaryPerDay(e.target.value)
					setTotalSalary(e.target.value*allWorkingDays)
					}}/></td>
				<td><input type="number" value={allWorkingDays} onChange={(e)=>{
					setWorkingDays(e.target.value)
					setTotalSalary(e.target.value*salaryPerDay)
				}}/></td>
				<td className='resultClass'>{totalSalary}</td>
			</tr>
		)
	}

	const WorkersRenderTable = ({workers})=>{
		return(<tbody className='tableClass'>
			{workers.map(worker => 
			<WorkersTable worker={worker} key={worker.id}/>
		)}
		</tbody>
		)
	}

export default WorkersRenderTable