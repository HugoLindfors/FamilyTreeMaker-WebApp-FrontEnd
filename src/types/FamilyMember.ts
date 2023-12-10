type FamilyMember = {
  id: string
  gender: 'male' | 'female' | 'unknown'
  firstName: string
  lastName: string
  spouses?: Array<string>
}