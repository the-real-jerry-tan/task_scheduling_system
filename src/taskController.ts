/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

import { Request, Response } from 'express';
import { scheduleJob, Job } from 'node-schedule';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage for tasks
let tasks: { id: string; job: Job; name: string; schedule: string; }[] = [];

// Schedule a new task
export const scheduleTask = (req: Request, res: Response) => {
    const { name, schedule } = req.body;
    const id = uuidv4();
    const job = scheduleJob(schedule, () => {
        console.log(`Task ${name} executed`);
    });
    tasks.push({ id, job, name, schedule });
    res.status(201).json({ message: 'Task scheduled', id, name, schedule });
};

// Get all scheduled tasks
export const getTasks = (req: Request, res: Response) => {
    res.json({ tasks: tasks.map(t => ({ id: t.id, name: t.name, schedule: t.schedule })) });
};

// Cancel a task
export const cancelTask = (req: Request, res: Response) => {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }
    tasks[taskIndex].job.cancel();
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task canceled' });
};
