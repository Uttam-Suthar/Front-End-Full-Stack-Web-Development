// IIEF method apply for removeing overrieds prblm when using multipla js file so use function
(function () {
    let tasks = [];
    const taskList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');

    console.log('Working');

    var a = 10
    // Fetching data from API   or  Async Await

    async function fetchTodos() {
        // function fetchTodos() {
        //get request    from this site jsonplaceholder.typicode.com
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        //    or 
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(function (response) {
        //         console.log(response)
        //         return response.json()
        //     }).then(function (data) {
        //         // console.log(data)
        //         tasks = data.slice(0, 10)
        //         renderList()
        //     })
        //     .catch(function (error) {
        //         console.log("error", error)
        //     })


        //or  Async Await
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks = data.slice(0, 10)
            renderList()

        } catch (error) {
            console.log(error)

        }

    }

    function addTaskToDOM(task) {
        const li = document.createElement("li");
        li.innerHTML = `
          <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ""} class="custom-checkbox">
          <label for="${task.id}">${task.title}</label>
          <img src="bin.png" class="delete" data-id="${task.id}" />
        `;
        taskList.append(li)

    }

    // Rendering list


    function renderList() {
        taskList.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
            addTaskToDOM(tasks[i])

        }
        tasksCounter.innerHTML = tasks.length
    }



    // Toggle tasks

    function toggleTask(taskId) {
        console.log(taskId)  /// give number id when use this task.id === taskId;
        const task = tasks.filter(function (task) {
            // return task.id === taskId;
            return task.id === Number(taskId);

        })

        if (task.length > 0) {

            const currentTask = task[0]
            currentTask.completed = !currentTask.completed
            renderList()
            showNotification("Task toggle succefully")
            return
        }
        showNotification("could not toggle the task")


    }

    // Adding deleting task


    function deleteTask(taskId) {
        const newTasks = tasks.filter(function (task) {
            // return task.id !== taskId;
            return task.id !== Number(taskId);

        });

        tasks = newTasks;
        renderList();
        showNotification("Tasks deleted succefully")
    }

    function addTask(task) {
        if (task) {
            // post method   fomr mozila  site  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

            // fetch('https://jsonplaceholder.typicode.com/todos', {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then(function (response) {
            //         console.log(response)
            //         return response.json()
            //     }).then(function (data) {
            //         console.log(data)
            //         // tasks = data.slice(0, 10)
            //         // renderList()
            //         tasks.push(task)
            //         renderList()
            //         showNotification("Task added successfully")
            //         // return
            //     })
            //     .catch(function (error) {
            //         console.log("error", error)
            //     })

            tasks.push(task)
            renderList()
            showNotification("Task added successfully")
            return
        }
        showNotification("Task can not be added")
    }

    function showNotification(text) {
        alert(text)

    }

    //inout Getting user typed task


    function handleInputKeypress(e) {
        if (e.key === "Enter") {
            const text = e.target.value
            console.log("text", text)

            if (!text) {
                showNotification("Tast  text can not be empty");
                return
            }
            const task = {
                // text,
                title: text,
                // id: Date.now().toString(),
                id: Date.now(),
                // done: false
                completed: false

            }
            e.target.value = "";
            addTask(task)
        }
    }

    // Event delegation


    function handleClickListener(e) {
        const target = e.target;
        console.log(target)
        if (target.className === "delete") {
            const taskId = target.dataset.id;
            deleteTask(taskId)
            return
        }
        else if (target.className === "custom-checkbox") {
            const taskId = target.id
            toggleTask(taskId)
            return
        }
    }


    function initializeApp() {
        fetchTodos()
        addTaskInput.addEventListener("keyup", handleInputKeypress)
        document.addEventListener('click', handleClickListener)
    }
    initializeApp();

})();
