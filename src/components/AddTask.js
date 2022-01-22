import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add text!')
            return;
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Add task'></input>
            </div>

            <div className="form-control ">
                <label>Day</label>
                <input type='text' value={day} onChange={(e) => setDay(e.target.value)} placeholder='Add Day'></input>
            </div>

            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input className="btn btn-block" value='Save' type='submit'></input>
        </form>
    )
}

export default AddTask