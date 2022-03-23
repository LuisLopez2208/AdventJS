letter => {
    let x = letter.split(" ")
    let obj = {}
    x.forEach( e => {
      if( e != "" && ![...e].includes("_")){
        if(typeof obj[e] != "undefined" ){
            obj[e] = obj[e] + 1
        }else{
          obj[e] = 1
        }
      }
    })
    return obj
  }