function newImage(url, left, bottom) {
    let item = document.createElement('img')
    item.src = url
    item.style.position = 'fixed'
    item.style.left = left + 'px'
    item.style.bottom = bottom + 'px'
    document.body.append(item)

    return item
}


function newItem(url, left, bottom) {
    let item = newImage(url, left, bottom)
    item.addEventListener('dblclick', function () {
        item.remove()
    })
}




newImage('assets/green-character.gif', 100, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)



newItem('assets/sword.png', 500, 555)
newItem('assets/sheild.png', 165, 335)
newItem('assets/staff.png', 600, 250)