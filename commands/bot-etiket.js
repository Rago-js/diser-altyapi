module.exports = [
  {
    name: "$alwaysExecute",
    $if: "old",
    code: `
    $if[$checkContains[$message;<@$clientID>;$clientID]==true]
    
    $else
    $endif
    
    
    `
  }
]