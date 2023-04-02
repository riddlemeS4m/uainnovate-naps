fetch("vpdata.json")
  .then(function(response) {
    return response.json()
}).then(function(json) {
    createTable(json, 'maintable')
    filtered_json = json.filter(function(a){
        return a.Tier == 1 || a.Tier == 2
    })
    createTable(filtered_json, 'toplevel')
    localStorage.setItem('vpdata',JSON.stringify(json))
});

const filters = {
    searchText:'',
    sortBy: 'byEdited'
}


function createTable(json, id) {

    let app = document.getElementById(id)

    //create table
    
    let table = document.createElement('table')
    table.border = '1'
    table.id = 'songTable'

    let tableBody = document.createElement('tbody')
    tableBody.id = 'songTableBody'
    table.appendChild(tableBody)
    
      //create header row
    
    let tr = document.createElement('tr')
    tableBody.appendChild(tr)
    
    let th2 = document.createElement('th')
    th2.width = 200
    th2.appendChild(document.createTextNode('Employee Id'))
    tr.appendChild(th2)
    
    let th3 = document.createElement('th')
    th3.width = 200
    th3.appendChild(document.createTextNode('Employee Name'))
    tr.appendChild(th3)
        
    let th4 = document.createElement('th')
    th4.width = 100
    th4.appendChild(document.createTextNode('Manager Name'))
    tr.appendChild(th4)
      
    
      //add data rows
    
   
    
    json.forEach((employee)=>{
        let tr = document.createElement('tr')
        tableBody.appendChild(tr)
        
        let td2 = document.createElement('td')
        td2.width = 200
        td2.appendChild(document.createTextNode(`${employee.Emp34Id}`))
        tr.appendChild(td2)
            
        let td3 = document.createElement('td')
        td3.width = 200
        td3.appendChild(document.createTextNode(`${employee.EmpFirstName} ${employee.EmpLastName}`))
        tr.appendChild(td3)
        
        let td4 = document.createElement('td')
        td4.width = 200
        td4.appendChild(document.createTextNode(`${employee.MgrName}`))
        tr.appendChild(td4)

    })
  
    app.appendChild(table)
}

document.querySelector('#search-text').addEventListener('input', e => {
    filters.searchText = e.target.value
    renderNotes(JSON.parse(localStorage.getItem('vpdata')), filters)
})

const renderNotes = (json, filters) => {
    filtered_json = json.filter(function(a){
        return a.Emp34Id.toLowerCase().includes(filters.searchText.toLowerCase()) 
    })
    document.getElementById('maintable').innerHTML=''
    createTable(filtered_json, 'maintable')

    if(filtered_json.length === 1 && document.getElementById('buttons').innerHTML === ''){
        buttons_div = document.getElementById('buttons')
        hierarchy = document.createElement('button')
        hierarchy.innerHTML = "View Hierarchy"
        hierarchy.addEventListener('click', function(e){
            location.assign(`./hierarchy.html#${filtered_json[0].Emp34Id}`)
        })
        buttons_div.appendChild(hierarchy)
    }
    // const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    // document.querySelector('#notes').innerHTML = ''

    // filteredNotes.forEach((note) => {
    //     const noteEl = createTable(note, 'maintable')
    //     document.querySelector('#notes').appendChild(noteEl)
    // })
}