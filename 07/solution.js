function contains(store, product) {
    return Object.values(store).some( obj => ( typeof obj == "object" ) ?  contains( obj, product) : obj == product )
  }