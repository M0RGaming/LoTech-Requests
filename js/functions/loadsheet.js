// CREATED BY CHINMAY PATIL -> TOOK FOREVER, DONT STEAL


function insertData(data) {


  
  //console.log(data)
  //console.log(data.feed.entry);
  //console.log(data.feed.entry.length)
  sheet = data.result.values

  /*
  var headers = []
  for (var i = 0; i < data.feed.entry.length; i++) {
    cell = data.feed.entry[i].title.$t
    content = data.feed.entry[i].content.$t
    len = cell.length
    if (len === 2) {
      if (cell.substring(1) === "1") {
        //console.log(cell)
        headers.push(content)
      }
    }
  }
  */
  

  var cells = {}

/*
  for (i in sheet) {
    x = sheet[i]
    console.log(x)
    console.log(i)
    num = i+2
    letter =
    //cell = x.title.$t
    //num = cell.substring(1)
    //letter = cell.substring(0, 1)
    content = x.content.$t

    if (num in cells) {} else {
      cells[num] = {}
    }

    cells[num][letter] = content

  }
*/
  //console.log("=======Cells: "+sheet+"=======")
  //console.dir(cells)
  /*
  console.log("=======Headers=======")
  console.log(headers)
  console.log("==============")
  */

  tout = ""
  dout = ""

  for (i in sheet) {
    cell = sheet[i]

    
    var timesub = cell[0]
    var email = cell[1]
    var eventname = cell[2]
    var organizer = cell[3]
    var location = cell[4]
    var date = cell[5]
    var time = cell[6]
    var summary = cell[7]
    

    requirements = {}
    requirements.mic = cell[8]
    requirements.vga = cell[9]
    requirements.aux = cell[10]
    requirements.curtains = cell[11]
    requirements.lights = cell[12]
    requirements.seats = cell[13]
    requirements.decking = cell[14]


    var comments = cell[15]

    console.log(timesub)
    console.log(email)
    console.log(eventname)
    console.log(organizer)
    console.log(location)
    console.log(date)
    console.log(time)
    console.log(summary)
    console.log(comments)
    console.log(requirements.mic)
    console.log(requirements.vga)
    console.log(requirements.aux)
    console.log(requirements.curtains)
    console.log(requirements.lights)
    console.log(requirements.seats)
    console.log(requirements.decking)

    //console.log(crow)

    tout += "<tr class='trow"+i+"'><td>"+eventname+"</td><td>"+date+"</td><td>"+email+"</td><td>"+location+"</td><td onclick='show("+'"drow'+i+'"'+");'>[Click Here]</td></tr>"
    
    dout += "<div id='drow"+i+"'' class='exData drowid"+i+"'>"
    dout += "<h1>"+eventname+"</h1>"
    dout += "<h2 class='exDatah2'>Organized By: "+organizer+"</h2>"
    dout += "<h2 class='exDatah2'>Location: "+location+"</h2>"
    dout += "<h2 class='exDatah2'>Date: "+date+", Time: "+time+"</h2>"
    dout += "<h2 class='exDatah2'>Summary: "+summary+"</h2>"
    dout += "<h2 class='exDatah2'><br>Requirements:</h2><ul class='extraList'>"

    if (requirements.mic === "Yes" || requirements.aux === "Yes") {
      dout += "<li>Speakers are required</li>"
    }
    if (requirements.mic === "Yes") {
      dout += "<li>Mic is required</li>"
    }
    if (requirements.vga === "Yes") {
      dout += "<li>Projecter is required</li>"
    }
    if (requirements.aux === "Yes") {
      dout += "<li>Aux Cable is required</li>"
    }
    if (requirements.curtains === "Yes") {
      dout += "<li>Curtains are required</li>"
    }
    if (requirements.lights === "Yes") {
      dout += "<li>Theatre lighting is required (and operator)</li>"
    }
    if (requirements.seats === "Yes") {
      dout += "<li>Tables and chairs are required</li>"
    }
    if (requirements.decking === "Yes") {
      dout += "<li>Decking is required</li>"
    }

    dout += "</ul><h2 class='exDatah2'><br>Extra Comments:</h2><p style='text-align: center;'>"+comments+"</p>"
    dout += "<img src='media/Fancy X.png' class='closeX' onclick='hide("+'"drow'+i+'"'+")'></div>"

    /*
    if (crow.exDesc === "") {
      crow.exDesc = crow.desc
    }

    //console.log(name)

    tout += "<tr class='trowid"+crow.id+"'><td>"+crow.name+"</td><td>"+crow.id+"</td><td>"+crow.group+"</td><td>"+crow.desc+"</td><td onclick='show("+'"'+crow.id+'"'+");'>[Click Here]</td></tr>"
    



    dout += "<div id='"+crow.id+"' class='exData drowid"+crow.id+"'><h1>"+crow.name+"</h1><h2>"+crow.id+"</h2>"

    if (crow.img !== "") {
      dout +="<img src="+crow.img+" class='eximg'>"
    }
    
    dout +="<p class='exDesc'>"+crow.exDesc+"</p><h3 class='location'>Last known location: "+crow.loc+"</h3><div class='rent "+crow.avail+"'><h3>Available: "+crow.avail+"</h3><p class='rentee'>Taken Out by: "+crow.rentee+"</p><p class='due'>Due: "+crow.due+"</p><button class='checkout'>Check Out</button></div><img src='media/Fancy X.png' class='closeX' onclick='hide("+'"'+crow.id+'"'+")'></div>"
    */



  }

  $('#datatable').append(tout)
  $('#extraData').append(dout)
}