const TaskList = {
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Faire les courses',
                    description: 'Acheter des légumes et du lait.',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Faire du sport',
                    description: 'Courir pendant 30 minutes.',
                    completed: true
                },
                {
                    id: 3,
                    title: "Réviser pour l'examen",
                    description: 'Relire le chapitre 5 du manuel.',
                    completed: false
                }
            ],
            filter: 'all'
        };
    },

    computed: {
        totalTasks() {
            return this.tasks.length;
        },
        filteredTasks() {
            if (this.filter === 'todo') {
                return this.tasks.filter(task => !task.completed);
            }
            if (this.filter === 'completed') {
                return this.tasks.filter(task => task.completed);
            }
            return this.tasks;
        }
    },

    methods: {
        markAsCompleted(id) {
            const task = this.tasks.find(task => task.id === id);
            if (task) task.completed = true;
        }
    }
};

Vue.createApp(TaskList).mount('#app');
