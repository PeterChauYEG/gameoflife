const board = [
  {
    row: 0,
    column: 0,
    health: null,
    neighbours: [
      {
        row: 2,
        column: 2,
      },
      {
        row: 2,
        column: 0,
      },
      {
        row: 2,
        column: 1,
      },
      {
        row: 0,
        column: 2,
      },      
      {
        row: 0,
        column: 1,
      },
      {
        row: 1,
        column: 2,
      },
      {
        row: 1,
        column: 0,
      },
      {
        row: 1,
        column: 1,
      },      
    ]
  },
  {
    row: 0,
    column: 1,
    health: 'alive',
    neighbours: [
      {
        row: 2,
        column: 0,
      },
      {
        row: 2,
        column: 1,
      },
      {
        row: 2,
        column: 2,
      },
      {
        row: 0,
        column: 0,
      },      
      {
        row: 0,
        column: 2,
      },
      {
        row: 1,
        column: 0,
      },
      {
        row: 1,
        column: 1,
      },
      {
        row: 1,
        column: 2,
      }, 
    ]    
  },
  {
    row: 0,
    column: 2,
    health: null,
    neighbours: [
      {
        row: 2,
        column: 1,
      },
      {
        row: 2,
        column: 2,
      },
      {
        row: 2,
        column: 0,
      },
      {
        row: 0,
        column: 1,
      },      
      {
        row: 0,
        column: 0,
      },
      {
        row: 1,
        column: 1,
      },
      {
        row: 1,
        column: 2,
      },
      {
        row: 1,
        column: 0,
      }, 
    ]
  },
  {
    row: 1,
    column: 0,
    health: 'alive',
    neighbours: [
      {
        row: 0,
        column: 2,
      },
      {
        row: 0,
        column: 0,
      },
      {
        row: 0,
        column: 1,
      },
      {
        row: 1,
        column: 2,
      },      
      {
        row: 1,
        column: 1,
      },
      {
        row: 2,
        column: 2,
      },
      {
        row: 2,
        column: 0,
      },
      {
        row: 2,
        column: 1,
      }, 
    ]
  },
  {
    row: 1,
    column: 1,
    health: null,
    neighbours: [
      {
        row: 0,
        column: 0,
      },
      {
        row: 0,
        column: 1,
      },
      {
        row: 0,
        column: 2,
      },
      {
        row: 1,
        column: 0,
      },      
      {
        row: 1,
        column: 2,
      },
      {
        row: 2,
        column: 0,
      },
      {
        row: 2,
        column: 1,
      },
      {
        row: 2,
        column: 2,
      }, 
    ]    
  },
  {
    row: 1,
    column: 2,
    health: null,
    neighbours: [
      {
        row: 0,
        column: 1,
      },
      {
        row: 0,
        column: 2,
      },
      {
        row: 0,
        column: 0,
      },
      {
        row: 1,
        column: 1,
      },      
      {
        row: 1,
        column: 0,
      },
      {
        row: 2,
        column: 1,
      },
      {
        row: 2,
        column: 2,
      },
      {
        row: 2,
        column: 0,
      }, 
    ]
  },
  {
    row: 2,
    column: 0,
    health: 'alive',
    neighbours: [
      {
        row: 1,
        column: 2,
      },
      {
        row: 1,
        column: 0,
      },
      {
        row: 1,
        column: 1,
      },
      {
        row: 2,
        column: 2,
      },      
      {
        row: 2,
        column: 1,
      },
      {
        row: 0,
        column: 2,
      },
      {
        row: 0,
        column: 0,
      },
      {
        row: 0,
        column: 1,
      }, 
    ]
  },
  {
    row: 2,
    column: 1,
    health: null,
    neighbours: [
      {
        row: 1,
        column: 0,
      },
      {
        row: 1,
        column: 1,
      },
      {
        row: 1,
        column: 2,
      },
      {
        row: 2,
        column: 0,
      },      
      {
        row: 2,
        column: 2,
      },
      {
        row: 0,
        column: 0,
      },
      {
        row: 0,
        column: 1,
      },
      {
        row: 0,
        column: 2,
      }, 
    ]    
  },
  {
    row: 2,
    column: 2,
    health: null,
    neighbours: [
      {
        row: 1,
        column: 1,
      },
      {
        row: 1,
        column: 2,
      },
      {
        row: 1,
        column: 0,
      },
      {
        row: 2,
        column: 1,
      },      
      {
        row: 2,
        column: 0,
      },
      {
        row: 0,
        column: 1,
      },
      {
        row: 0,
        column: 2,
      },
      {
        row: 0,
        column: 0,
      }, 
    ]
  },  
]

export default board
