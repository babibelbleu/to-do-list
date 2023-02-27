import '../styles/searchbar.css'

export default function SearchBar({setTasks}) {

    const handlerSearchMatchingTask = (e) => {
        const fetchMatchingTasks = async() => {
            if(e.target.value === ''){
                const response = await fetch('/api/tasks');
                const data = await response.json();

                if(response.ok){
                    setTasks(data);
                }
                return;
            }
            const response = await fetch(`/api/tasks/search/${e.target.value}`);
            const data = await response.json();

            if(response.ok){
                console.log(data);
                setTasks(data);
            }
        }

        fetchMatchingTasks();
    }

    return (
        <div className="tdl-searchbar">
            <input type="text" placeholder="Recherche" onChange={handlerSearchMatchingTask} />
        </div>
    );
}