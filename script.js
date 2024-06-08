document.getElementById('text-input-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted');
    const input1 = document.getElementById('multiline-input').value;
    console.log(`${input1}`);
    console.log('\n\n')

    const listsArr = input1.split('\n\n') // the lists
    const lists = {} // list object
    const perishables = []

    for (const list of listsArr) {
        if (!list.length) continue
        const parsedList = list.split('\n')

        let title = 'Untitled List'
        if (parsedList[0][0] === '#') {
            title = parsedList.shift()
        }
        lists[title] = parsedList

        for (const item of parsedList) {
            if (!item.includes('.')) continue
            const split = item.split('.')

            const prefix = split[0]
            const food = split[1]

            if (prefix.includes('c')) perishables.push(food)
        }
    }
    console.log(perishables, '??')
    console.log(lists, 'we here?')
});

