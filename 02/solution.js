const letter = l => l.split(" ").reduce( (acc, e ) => {    
    ( e != "" && ![...e].includes("_") )  && ( acc[e] = typeof acc[e] != "undefined" ? acc[e] + 1 : 1 )    
    return acc
  }, {})