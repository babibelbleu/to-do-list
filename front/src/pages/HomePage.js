import '../styles/homepage.css'

import { useState } from 'react';

import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TaskList from '../components/TaskList';

export default function HomePage() {

  const [tasks, setTasks] = useState(null);

  return (
    <div className="tdl-homepage">
        <Header />
        <SearchBar setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}