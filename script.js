document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('toggle-container');
    const numToggles = 7; // Set to 7 for the number of names
    const names = ["Coco", "David", "Benjamin", "Alexandre", "Yannick", "Frederic", "Jennifer"]; // Your list of names

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    shuffleArray(names);

    const generateToggles = () => {
        names.forEach((name, index) => {
            const toggleId = `name-toggle-${index}`;
            container.innerHTML += `
        <div class="flex item-align-right">
          <label for="${toggleId}" class="inline-flex relative items-center mr-6 cursor-pointer">
            <input type="checkbox" id="${toggleId}" class="sr-only peer">
            <div class="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-5"></div>
          </label>
          <span class="text-gray-900 font-medium">${name}</span>
        </div>
      `;
        });
    };

    const randomToggleOthers = (currentId) => {
        names.forEach((_, index) => {
            let checkbox = document.getElementById(`name-toggle-${index}`);
            if (`name-toggle-${index}` !== currentId && Math.random() > 0.5) {
                checkbox.checked = !checkbox.checked;
            }
        });
    };

    generateToggles();

    names.forEach((_, index) => {
        document.getElementById(`name-toggle-${index}`).addEventListener('change', function () {
            randomToggleOthers(this.id);
        });
    });
});