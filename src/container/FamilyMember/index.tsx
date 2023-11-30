import React from 'react'

let familyMembers: Array<FamilyMember> = [
  {
    Id: 'D42fkL3G',
    FirstName: 'John',
    LastName: 'Doe',
    Spouses: [
      'G9yaU4Xd'
    ]
  },
  {
    Id: 'G9yaU4Xd',
    FirstName: 'Jane',
    LastName: 'Doe',
    Spouses: [
      'D42fkL3G'
    ]
  }
]

let Spouses = (familyMember: FamilyMember) => {
  () => console.log(`I'm in`)
  const spouseIds = familyMember.Spouses
  const spouses = spouseIds.map((id) => {
    const spouse = familyMembers.find(member => member.Id === id)
    if (spouse)`${spouse.FirstName} ${spouse.LastName}`
  });

  return <div>{spouses.join(', ')}</div>
}


let FamilyMember = (familyMemberId: string, treeView: TreeView) => {
  let familyMember: FamilyMember

  familyMembers.forEach(fm => {
    if (fm.Id == familyMemberId) familyMember = fm
  })

    () => {
  switch (treeView) {
    case 'family':
      return (
        <>
          <div>{familyMember.FirstName} {familyMember.LastName}</div>
          <div>{Spouses(familyMember)}</div>
        </>
      )
  }
} ()
}

export default FamilyMember