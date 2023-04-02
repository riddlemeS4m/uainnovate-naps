let hierarchytable = document.getElementById('hierarchytable')
vpdata = JSON.parse(localStorage.getItem('vpdata'))
const employeeId = location.hash.substring(1)

console.log(employeeId)
console.log(vpdata)


let employee = vpdata.filter(function(a){
    return a.Emp34Id === employeeId
})

let hierarchydata = vpdata.filter(function(a){
    return a.Emp34Id === employeeId || (a.Left > employee[0].Left && a.Right < employee[0].Right) || (a.Right > employee[0].Right && a.Left < employee[0].Left)
})

console.log(hierarchydata.length)

createTable(hierarchydata, 'hierarchytable')
createDetailsTable(employee[0], 'detailsTable')

function createTable(json, id) {

    let app = document.getElementById(id)

    //create table
    
    let table = document.createElement('table')
    table.border = '1'
    table.id = 'hierarchy-table'

    let tableBody = document.createElement('tbody')
    tableBody.id = 'hierarchyTableBody'
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

function createDetailsTable(employee, id){
    let app = document.getElementById(id)

    //create table
    
    let table = document.createElement('table')
    table.border = '1'
    table.id = 'details-table'

    let tableBody = document.createElement('tbody')
    tableBody.id = 'detailsTableBody'
    table.appendChild(tableBody)
    
      //create header row
    
    let tr1 = document.createElement('tr')
    
    let th2 = document.createElement('th')
    th2.width = 200
    th2.appendChild(document.createTextNode('Employee Id'))
    tr1.appendChild(th2)

    let td2 = document.createElement('td')
    td2.width = 200
    td2.appendChild(document.createTextNode(`${employee.Emp34Id}`))
    tr1.appendChild(td2)

    tableBody.appendChild(tr1)
    

    let tr2 = document.createElement('tr')

    let th3 = document.createElement('th')
    th3.width = 200
    th3.appendChild(document.createTextNode('Employee Name'))
    tr2.appendChild(th3)

    let td3 = document.createElement('td')
    td3.width = 200
    td3.appendChild(document.createTextNode(`${employee.EmpFirstName} ${employee.EmpLastName}`))
    tr2.appendChild(td3)

    tableBody.appendChild(tr2) 


    let tr3 = document.createElement('tr')
        
    let th4 = document.createElement('th')
    th4.width = 200
    th4.appendChild(document.createTextNode('Email Address'))
    tr3.appendChild(th4)

    let td0 = document.createElement('td')
    td0.width = 200
    td0.appendChild(document.createTextNode(`${employee.EmpEmailAddress}`))
    tr3.appendChild(td0)

    tableBody.appendChild(tr3)


    let tr4 = document.createElement('tr')

    let th5 = document.createElement('th')
    th5.width = 200
    th5.appendChild(document.createTextNode('Manager Id'))
    tr4.appendChild(th5)

    let td5 = document.createElement('td')
    td5.width = 200
    td5.appendChild(document.createTextNode(`${employee.Mgr34Id}`))
    tr4.appendChild(td5)

    tableBody.appendChild(tr4)


    let tr5 = document.createElement('tr')

    let th6 = document.createElement('th')
    th6.width = 200
    th6.appendChild(document.createTextNode('Manager Name'))
    tr5.appendChild(th6)

    let td6 = document.createElement('td')
    td6.width = 200
    td6.appendChild(document.createTextNode(`${employee.MgrName}`))
    tr5.appendChild(td6)

    tableBody.appendChild(tr5)



    let tr6 = document.createElement('tr')

    let th7 = document.createElement('th')
    th7.width = 200
    th7.appendChild(document.createTextNode('Manager Title'))
    tr6.appendChild(th7)

    let td7 = document.createElement('td')
    td7.width = 200
    td7.appendChild(document.createTextNode(`${employee.MgrTitle}`))
    tr6.appendChild(td7)

    tableBody.appendChild(tr6)



    let tr7 = document.createElement('tr')

    let th8 = document.createElement('th')
    th8.width = 200
    th8.appendChild(document.createTextNode('Manager Contact'))
    tr7.appendChild(th8)

    let td8 = document.createElement('td')
    td8.width = 200
    td8.appendChild(document.createTextNode(`${employee.MgrEmailAddress}`))
    tr7.appendChild(td8)

    tableBody.appendChild(tr7)



    let tr8 = document.createElement('tr')

    let th9 = document.createElement('th')
    th9.width = 200
    th9.appendChild(document.createTextNode('Employee Anniversary'))
    tr8.appendChild(th9)

    let td9 = document.createElement('td')
    td9.width = 200
    td9.appendChild(document.createTextNode(`${employee.EmpAnnivDate}`))
    tr8.appendChild(td9)

    tableBody.appendChild(tr8)



    let tr9 = document.createElement('tr')

    let th10 = document.createElement('th')
    th10.width = 200
    th10.appendChild(document.createTextNode('Supervisor?'))
    tr9.appendChild(th10)

    let td10 = document.createElement('td')
    td10.width = 200
    td10.appendChild(document.createTextNode(`${employee.EmpPositionIsSuper}`))
    tr9.appendChild(td10)

    tableBody.appendChild(tr9)



    let tr10 = document.createElement('tr')

    let th11 = document.createElement('th')
    th11.width = 200
    th11.appendChild(document.createTextNode('Location'))
    tr10.appendChild(th11)

    let td11 = document.createElement('td')
    td11.width = 200
    td11.appendChild(document.createTextNode(`${employee.EmpLocationDesc}`))
    tr10.appendChild(td11)

    tableBody.appendChild(tr10)


    app.appendChild(table)
}