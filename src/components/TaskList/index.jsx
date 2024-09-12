import React from 'react';
import TaskItem from '../TaskItem';

function TaskList() {
    return (
        <div className='task'>
            <ul>
                <TaskItem task={'Tarea 1'}></TaskItem>
                <TaskItem task={'Tarea 2'}></TaskItem>
                <TaskItem task={'Tarea 3'}></TaskItem>
            </ul>
        </div>
    );
}

export default TaskList;
